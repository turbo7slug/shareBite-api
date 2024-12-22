const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const { CLIENTID, JWT_SECRET } = require('../config');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (req, res, next) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENTID,
    });
    const payload = ticket.getPayload();

    const { sub, name, email, picture } = payload;

    let user = await User.findOne({ googleId: sub });
    if (!user) {
      user = await User.create({ googleId: sub, name, email, avatar: picture });
    }

    const jwtToken = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '90d' });

    res.status(200).json({ token: jwtToken });
  } catch (error) {
    next(error);
  }
};

module.exports = { googleAuth };

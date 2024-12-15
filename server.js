require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

//routes
app.use('/auth', authRoutes);

app.use(errorHandler);

const connectDB = require('./utils/db');
connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
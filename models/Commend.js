const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CommendSchema = new Schema({
  commend: {
    type: String,
    required: true,
  },
  givenByUser: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  }
});

module.exports = mongoose.model('Commend', CommendSchema);

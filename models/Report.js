const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ReportSchema = new Schema({
  report: {
    type: String,
    required: true,
  },
  givenToUser: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  }
});

module.exports = mongoose.model('Report', ReportSchema);
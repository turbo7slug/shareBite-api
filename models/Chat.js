const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ChatSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    attachment: Boolean,
    sender: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    time: Date
});

module.exports = mongoose.model('Chat', ChatSchema);

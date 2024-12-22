const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    adminUser: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    groupSize: {
        type: Number, 
        required: true
    },
    deadline: {
        type: Date, 
        required: true
    },
    platform: {
        type: String, 
        required: true
    },
    outlet: {
        type: String, 
        required: true
    },
    minContribution: {
        type: Number, 
        required: true
    },
    requests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user', 
            required: true
        },
    ],
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user', 
            required: true
        },
    ],
    chats: [
        {
            type: Schema.Types.ObjectId,
            ref: 'chat', 
            required: true
        },
    ],
    hostelRestrictions: [
        {
            type: String, 
        },
    ],
    description: String,
    additionalTag: String,
    invoice: String,
    isVerified: Boolean,
    isDeleted: Boolean
});

module.exports = mongoose.model('Group', GroupSchema);

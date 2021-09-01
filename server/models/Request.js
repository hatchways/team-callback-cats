const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sitterId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'declined', 'completed'],
        required: false,
        default: 'pending'
    },
    paid: {
        type: Boolean,
        required: true,
        default: false
    },
});

module.exports = Request = mongoose.model("request", requestSchema);

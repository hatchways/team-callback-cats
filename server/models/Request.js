const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    sitterId: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        default: Date.now
    },
    end: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: false
    },
    paid: {
        type: Boolean,
        required: true,
        default: false
    },
});

module.exports = Request = mongoose.model("request", requestSchema);

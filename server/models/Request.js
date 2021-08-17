const mongoose = require('mongoose');

/*****************************
 TODO
    check that we can access model correctly
    TBD instead of accepted/declined be different values, implement a status property that accepts all different stages of request life?
 *****************************/

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
    accepted: {
        type: Boolean,
        default: false
    },
    declined: {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    paid: {
        type: Boolean,
        default: false
    }
});

module.exports = Request = mongoose.model("request", requestSchema);

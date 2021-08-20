const Request = require('../models/Request');
const User = require('../models/User');
const asyncHandler = require("express-async-handler");

/***********
 TODO
    
 ************/

// req.body has userId, sitterId, start, end, accepted, declined, completed, paid

// GET /requests: list of requests for logged in user
exports.getRequests = asyncHandler( async (req, res, next) => {
    const { userId } = req.body;

    const currentUser = await User.findById(userId);
    console.log(currentUser);
});

// POST /request: Create a new request
exports.createRequest = asyncHandler( async (req, res, next) => {
    res.send('Not implememented: Create request');
});

// UPDATE /request/:id : Update request with approved or decline
exports.updateRequestStatus = asyncHandler( async (req, res, next) => {
    res.send('Not implememented: Update request status');
})
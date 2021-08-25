const Request = require('../models/Request');
const User = require('../models/User');
const asyncHandler = require("express-async-handler");

// req.body has userId, sitterId, start, end, status, paid, request._id
// status accepts 'pending' (default) / 'accepted' / 'declined' / 'completed'
// TODO => Handle status change cases

// GET /requests: list of requests for logged in user
exports.getRequests = asyncHandler( async (req, res, next) => {
    const { userId } = req.body;

    // const currentUser = await User.findById(userId);
    // console.log('current User:', currentUser);

    const requests = await Request.find()
        .then(() => {
            console.log('All requests: ', requests);
        })
        .catch(err => console.log('Error getting requests:', err));
});

// POST /request: Create a new request
exports.createRequest = asyncHandler( async (req, res, next) => {
    const { userId, sitterId, start, end, status, paid } = req.body;

    const request = await Request.create({
        userId, 
        sitterId, 
        start, 
        end, 
        status,
        paid
    })

    if(request) {
        res.status(201).send(request);
    } else {
        res.send(500);
    }
});

// UPDATE /request/update/:id : Update request with approved or decline
exports.updateRequestStatus = asyncHandler( async (req, res, next) => {
    const request = req.body;
    const id  = request._id;
    const { status } = request;

    if (!id) {
        res.status(404).send('Request not found');
    }
    await Request.findByIdAndUpdate(
        id,
        {
            $set: {
                status: status,
            }
        },
    )
    .then(() => {
        res.send(200);
    })
    .catch(err => {
        res.send(500);
    })
})
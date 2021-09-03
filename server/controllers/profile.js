const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route PATCH /profile
// @desc get a profile, id in req.body
// @access Private
exports.updateProfile = asyncHandler(async (req, res) => {
    const id  = req.user.id;

    User.findByIdAndUpdate(
      id,
      {
        $set: {
          profilePic: req.body.profilePic,
        },
      }, 
      function(err, res) {
        if(err){
            console.log('Error: ', err);
        }
        else {
          console.log('Response: ', res.profilePic);
        }
    })
})

// @route GET /profile/:id
// @desc update a profile with the given ID and parameters
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
    const id = req.user.id;

    const user = await User.findById({ id });

    User.findById(id, function (err, user) {
    if (err){
        res.status(204);
    }
    else{
        res.status(200).json({
          user: {
          id: user._id,
          username: user.username,
          email: user.email,
          location: user.location,
          phoneNumber: user.phoneNumber,
          profilePic: user.profilePic,
          description: user.description
          }
        });
    }
  })
})

// @route GET /profile
// @desc update a profile with the given ID and parameters
// @access Private
exports.getAllProfiles = asyncHandler(async (req, res, next) => {

     User.find({}, '-password', function (err, users) {
       res.status(200).json(users);
  });
}) 


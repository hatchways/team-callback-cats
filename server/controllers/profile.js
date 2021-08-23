const User = require("../models/User");
const asyncHandler = require("express-async-handler");





// @route PUT /profile/:id
// @desc get a profile with given ID
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
    const  id  = req.user.id;

    const { username, 
            email, 
            password,
            location,
            phoneNumber,
            profilePic,
            description} = req.body;

  const emailExists = await User.findOne({ email });
  const usernameExists = await User.findOne({ username});



  if (emailExists) {
    res.status(400);
    throw new Error("A user with that email already exists");
  }

  if (usernameExists){
      res.status(400);
      throw new Error("A user with that username already exists");
  }

    User.findByIdAndUpdate({id},{
        "username": username,
        "email": email,
        "password": password,
        "location": location,
        "phoneNumber": phoneNumber,
        "profilePic": profilePic,
        "description": description
    }, function(err, result){

        if(err){
            res.status(404);
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


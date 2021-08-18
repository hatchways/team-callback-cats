const User = require("../models/User");
const asyncHandler = require("express-async-handler");



exports.pingServer = asyncHandler(async (req, res, next) => {
    res.send("here")
})

// @route POST /profile
// @desc create a profile with given parameters
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
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
  const user = await User.create({
    username,
    email,
    password,
    location,
    phoneNumber,
    profilePic,
    description
  });

  if (user) {
    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000
    });

    res.status(201).json(
      {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          location: user.location,
          phoneNumber: user.phoneNumber,
          profilePic: user.profilePic,
          description: user.description
        }
      }
    );
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});


// @route PUT /profile/:id
// @desc get a profile with given ID
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

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
            res.status(400);
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
    const { id } = req.params;

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
        });
    }
});
}) 


// @route GET /profile
// @desc update a profile with the given ID and parameters
// @access Private
exports.getAllProfiles = asyncHandler(async (req, res, next) => {

     User.find({}, '-password', function (err, users) {
       res.status(200).json(users);
  });
}) 



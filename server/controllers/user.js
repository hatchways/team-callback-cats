const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route POST /users
// @desc Search for users
// @access Private
exports.searchUsers = asyncHandler(async (req, res, next) => {
  const searchString = req.query.search;

  let users;
  if (searchString) {
    users = await User.find({
      username: { $regex: searchString, $options: "i" }
    });
  }

  if (!users) {
    res.status(404);
    throw new Error("No users found in search");
  }

  res.status(200).json({ users: users });
});


// @route CREATE /profile
// @desc create a profile with given parameter
// @access Private

//exports.createProfile = asyncHandler(async (req, res, next) => {
//   const { newUsername, 
//           newemail, 
//           password, 
//           register_date, 
//           location, 
//           phone_number, 
//           profile_pic, console.log("pinged");
//    res.status(200);
//           description } = req.body;
  
//   var doc1 = new User({ 
//           username 
//   });

//   doc1.save(function(err, doc) {
//     if (err) return console.error(err);
//     console.log("Document inserted succussfully!");
//   });
// });


// @route GET /ping
// @desc ping server
// @access Public

  exports.pingServer = asyncHandler(async (req, res, next) => {
    res.send('aaaaaaaaaaaa');
  })
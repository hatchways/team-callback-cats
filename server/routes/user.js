const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { searchUsers } = require("../controllers/user");
const { updateProfile } = require("../controllers/profile");

router.route("/").get(protect, searchUsers);
// router.route("/:id/update-profile-picture").post(protect, updateProfile);

module.exports = router;

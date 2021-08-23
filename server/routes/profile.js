const express = require("express");
const protect = require('../middleware/auth');
const router = express.Router();
const { 
        updateProfile,
        getProfile,
        getAllProfiles} = require("../controllers/profile");




router.route("/").put(updateProfile);

router.route("/").get(protect, getProfile);

router.route("/").get(getAllProfiles);

module.exports = router;

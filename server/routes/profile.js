const express = require("express");
const protect = require('../middleware/auth');
const router = express.Router();
const { pingServer,
        updateProfile,
        getProfile,
        getAllProfiles} = require("../controllers/profile");


router.route("/pingServer").get(pingServer);

router.route("/").put(updateProfile);

router.route("/").get(protect, getProfile);

router.route("/").get(protect, getAllProfiles);

module.exports = router;

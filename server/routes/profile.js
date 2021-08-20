const express = require("express");
const protect = require('../middleware/auth');
const router = express.Router();
const { pingServer,
        updateProfile,
        getProfile,
        getAllProfiles} = require("../controllers/profile");


router.route("/pingServer").get(pingServer);

router.route("/:id").put(updateProfile);

router.route("/:id").get(protect, getProfile);

router.route("/").get(protect, getAllProfiles);

module.exports = router;

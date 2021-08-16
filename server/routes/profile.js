const express = require("express");
const router = express.Router();
const { pingServer,
        createProfile,
        updateProfile,
        getProfile,
        getAllProfiles} = require("../controllers/profile");


router.route("/pingServer").get(pingServer);

 router.route("/").post(createProfile);

 router.route("/:id").put(updateProfile);

 router.route("/:id").get(getProfile);

 router.route("/").get(getAllProfiles);

module.exports = router;

const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { searchUsers, pingServer } = require("../controllers/user");

router.route("/").get(protect, searchUsers);

router.route("/ping").get(pingServer);

module.exports = router;

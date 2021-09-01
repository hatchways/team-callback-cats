const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

const { getRequests, createRequest, updateRequestStatus } = require('../controllers/request');

router.route('/').get(protect, getRequests);
router.route('/create').post(protect, createRequest);
router.route('/update/:id').post(protect, updateRequestStatus);

module.exports = router;


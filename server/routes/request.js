const express = require('express');
const router = express.Router();

const { getRequests, createRequest, updateRequestStatus } = require('../controllers/request');

router.get('/', getRequests);
router.post('/create', createRequest);
router.post('/update/:id', updateRequestStatus);

module.exports = router;
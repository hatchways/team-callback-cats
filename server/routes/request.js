const express = require('express');
const router = express.Router();

const { getRequests, createRequest, updateRequestStatus } = require('../controllers/request');

router.get('/requests', getRequests);
router.post('/request/create', createRequest);
router.post('/request/:id/update', updateRequestStatus);

module.exports = router;
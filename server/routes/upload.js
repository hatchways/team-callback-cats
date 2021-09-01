const aws = require('aws-sdk');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../utils/s3Config');

const s3 = new aws.S3(config);

// filter for image formats only
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

// config ulpoad function, apply filter
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'lovingdogsitter',
        metadata: function(req, file, cb) {
            cb(null, { fieldname: file.fieldname });
        },
        key: function(req, file, cb) {
            cb(null, Date.now().toString());
        }
    }),
    fileFilter: fileFilter,
})

// Profile Image Upload
router.route('/profile-image').post(upload.single('profileImage'), (req, res) => {
    const { location } = req.file;
    try {
        res.status(200).send(location);
    } catch (err) {
        res.status(500).send('Error:', err);
    }
});

module.exports = router;

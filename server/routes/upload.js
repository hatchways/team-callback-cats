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
            cb(null, { fieldName: file.fieldName });
        },
        key: function(req, file, cb) {
            cb(null, Date.now().toString());
        }
    }),
    fileFilter: fileFilter,
})

// upload route for multiple images
router.post('/upload-image', upload.array('photos', 5), (req, res, next) => {
    res.send(`Successfully uploaded ${req.files.length} files!`);
});

// upload single (profile picture)
// const profileImageUpload = upload.single('image');
// router.post('/:id/update-profile-picture', (req, res) => {
//     const userId = req.params.id;
//     profileImageUpload(req, res, function(err) {
//         if (err) {
//             return res.json({
//                 success: false,
//                 errors: {
//                     title: "Image Upload Error",
//                     detail: err.message,
//                     error: err
//                 }
//             })
//         }
//         let update = { profilePic: req.file.location };

//         User.findByIdAndUpdate(userId, update)
//         .then((user) => res.status(200).json({ success: true, user: user }))
//         .catch((err) => res.status(400).json({ success: false, error: err }))
//     })
// })

module.exports = router;

module.exports = upload;

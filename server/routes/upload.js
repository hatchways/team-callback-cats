const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
import { config } from '../utils/s3Config';
const s3URL = 'lovingdogsitter.s3.us-west-1.amazonaws.com/media';

const app = express();
const s3 = new aws.S3(config);

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
    })
})

// upload route | Allow 5 images
app.put(`/${s3URL}`, upload.array('photos', 5), (req, res, next) => {
    res.send(`Successfully uploaded ${req.files.length} files!`);
});

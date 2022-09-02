const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3-v2');
require('dotenv').config()

aws.config.update({
    secretAccessKey: process.env.SECRET_KEY,
    accessKeyId: process.env.ACC_KEY,
    region: REGION
});

const s3 = new aws.S3();


const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'cultalaimagen',
      ContentType: 'image/png',
       acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null,);
      },
      key: function (req, file, cb) {
        cb(null,`${file.originalname}`)
      }
    })
  })
  //Date.now() + '-' +  
  module.exports = upload;

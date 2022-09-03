require("dotenv").config();
const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new S3Client({
  region: process.env.REGION,
  accessKeyId: process.env.ACC_KEY,
  secretAccessKey: process.env.SECRET_KEY,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null,`${file.originalname}`);
    },
  }),
});
//Date.now().toString()
module.exports = upload;

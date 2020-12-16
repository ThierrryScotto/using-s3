'use strict';

// dependencies
require('dotenv').config();
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadFile = (fileName, file) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key   : fileName,
    Body  : file
  };

  s3.upload(params, function (err, data) {
    console.log(`Data uploaded successfully at ${data.Location}`);
  })
};

const getFile = (nameFile) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key   : fileName
  };

  s3.getObject(params).createReadStream().pipe(nameFile);
}

module.exports = {
  uploadFile,
  getFile
}

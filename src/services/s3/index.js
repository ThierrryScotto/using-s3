'use strict';

// dependencies
require('dotenv').config();
const AWS = require('aws-sdk');

// private
const keyCreate = (idClientFile, fileName) => {
  return `${idClientFile}/${fileName}`;
}

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadFile = async (idClientFile, file) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key   : keyCreate(idClientFile, file.name),
    Body  : file.data
  };

  await s3.upload(params, function (err, data) {
    new Promise(function (resolve, reject) {
      if (err) {
        reject(err);
      }

      resolve(data);
      console.log(`Data uploaded successfully at ${data.Location}`);
    });
  });
};

const getFile = async (idClientFile, fileName) => {
  fileName = keyCreate(idClientFile, fileName);

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key   : fileName
  };

  return await s3.getObject(params).promise();
}

module.exports = {
  uploadFile,
  getFile
}

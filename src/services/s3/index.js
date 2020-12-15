'use strict';

const fs  = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const fileName = 'certificadoTDCOnline2020POA.pdf';


const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err;
    }

    const params = {
      Bucket: 'sls-dev-serverlessdeploymentbucket-1g5ip4utkw5o2/files',
      Key: 'certificadoTDCOnline2020POA.pdf',
      Body: JSON.stringify(data, null, 2)
    };

    s3.upload(params, function (err, data) {
      console.log(`Data uploaded successfully at ${data.Location}`);
    })
  })
};

uploadFile();

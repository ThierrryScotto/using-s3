'use strict';

// model
const clientFile = require('../../models/clientFile');

// s3
const s3 = require('../../services/s3');

const registerClientFile = async (req, res) => {
  try {
    const { idClient } = req.params; 
    const { fileName } = req.body;
    const body = req.body;

    console.log(body);

    const salvedFile = await clientFile.create({ idClient, fileName });
    s3.uploadFile(salvedFile.fileName, file);

    return res.status(201).send({ salvedFile });
  } catch(error) {
    console.log('Error: ', error);
    return res.status(500).send({ message: "Internal error" });
  }
};

module.exports = {
  registerClientFile
}
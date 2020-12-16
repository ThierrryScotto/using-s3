'use strict';

// models
const clientFile = require('../../models/clientFile');
const client     = require('../../models/client');

// s3
const s3 = require('../../services/s3');

const registerClientFile = async (req, res) => {
  try {
    const { clientId } = req.body;
    const file         = req.files.fileParam;

    const clientFound = await client.findOne({ _id: clientId });
    if (!clientFound) {
      return res.status(404).send({ message: `Client ${clientId} not found` });
    }

    const salvedFile = await clientFile.create({ clientId, fileName: file.name });
    await s3.uploadFile(salvedFile._id, file);

    return res.status(201).send({ salvedFile });
  } catch(error) {
    console.log('Error: ', error);
    return res.status(500).send({ message: "Internal error" });
  }
};

module.exports = {
  registerClientFile
}
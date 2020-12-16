'use strict';

// models
const clientFile = require('../../models/clientFile');

// s3
const s3 = require('../../services/s3');

const getClientFile = async (req, res) => {
  try {
    const { clientId, fileName } = req.params;

    const clientFound = await clientFile.findOne({ clientId, fileName });
    if (!clientFound) {
      return res.status(404).send({ message: `File ${fileName} or Client ${clientId} not found` });
    }

    await s3.getFile(clientFound._id, fileName, res);
  } catch(error) {
    console.log('Error: ', error);
    return res.status(500).send({ message: "Internal error" });
  }
};

module.exports = {
  getClientFile
}
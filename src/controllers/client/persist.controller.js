'use strict';

// model
const client = require('../../models/client');

// imports
const { generateToken } = require('../../helpers/jwt');

const registerClient = async (req, res) => {
  try {
    const body = req.body;
    
    const clientFound = await client.find();
    if (!clientFound) {
      return res.status(400).send({ message: "E-mail already registered" });
    }

    const clientCreated = await client.create(body);

    const token = generateToken(clientCreated.id);

    return res.status(201).send({ clientCreated, token });
  } catch(error) {
    console.log('Error: ', error);
    return res.status(500).send({ message: "Internal error" });
  }
};

module.exports = {
  registerClient
}
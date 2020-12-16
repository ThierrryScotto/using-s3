'use strict'

const { compare }       = require('../../helpers/bycript'); 
const { generateToken } = require('../../helpers/jwt');

const client = require('../../models/client');

const checkToken = async (req, res) => {
  const { email, password } = req.body;

  const clientFound = await client.findOne({ email }).select('+password');

  if (!clientFound) {
    return res.status(404).send('Client not found');
  }

  if (!await compare(password, clientFound.password)) {
    return res.status(404).send({ error: 'Invalid password' });
  }

  const token = generateToken(clientFound.id);

  res.send({ clientFound, token });
}

module.exports = {
  checkToken
}
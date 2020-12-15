'use strict'

const { compare }       = require('../../helpers/bycript'); 
const { generateToken } = require('../../helpers/jwt');

const User = require('../models/user');

const checkToken = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(404).send('User not found');
  }

  if (!await compare(password, user.password)) {
    return res.status(404).send({ error: 'Invalid password' });
  }

  const token = generateToken(user.id);

  res.send({ user, token });
}

module.exports = {
  checkToken
}
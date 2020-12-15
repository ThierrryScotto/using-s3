'use strict';

require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.generateToken = (params) => {
  return jwt.sign({ params }, process.env.JWT_SECRETE, {
    expiresIn: 60
  });
}

module.exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRETE, (err) => {
    if (err) {
      console.error(err);
      return false;
    }

    return true;
  });
}
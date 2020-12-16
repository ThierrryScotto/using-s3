'use strict';

require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.generateToken = (params) => {
  return jwt.sign({ params }, process.env.JWT_SECRETE, {
    expiresIn: 86400
  });
}

module.exports.checkToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRETE, (err) => {
    if (err) {
      console.error(err);
      return false;
    }

    return true;
  });
}
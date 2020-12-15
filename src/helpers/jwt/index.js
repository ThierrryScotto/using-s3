'use strict';

require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRETE, {
    expiresIn: 86400
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
'use strict';

// dependencies
const bcrypt = require('bcrypt');

module.exports.compare = async (password, clientPassword) => {
  return await bcrypt.compare(password, clientPassword);
};

module.exports.generateHash = async (password) => {
  const salt = await bcrypt.generateSalt();
  return await bcrypt.hash(password, salt);
};
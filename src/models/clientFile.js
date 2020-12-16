'use strict';

// imports
const mongoose         = require('../services/db/index');
const { generateHash } = require('../helpers/bycript');

const Schema = mongoose.Schema;

const clientFile = new Schema({
  clientId:  { type: String, required: true },
  fileName:  { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('clientFile', clientFile);

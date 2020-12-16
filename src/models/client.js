'use strict';

// imports
const mongoose         = require('../services/db/index');
const { generateHash } = require('../helpers/bycript');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  email:     { type: String, required: true },
  password:  { type: String, required: true, select: false },
  createdAt: { type: Date, default: Date.now }
});

clientSchema.pre('save', async function (next) {
  const hash = await generateHash(this.password);
  this.password = hash;

  next();
});

module.exports = mongoose.model('client', clientSchema);

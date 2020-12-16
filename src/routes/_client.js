"use strict"

// dependencies
const express = require('./index');

//controllers
const clientPersisteController = require('../controllers/client/persist.controller');

express.router.post('/client', clientPersisteController.registerClient);

module.exports = express.router;
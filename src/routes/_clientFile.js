"use strict"

// dependencies
const express = require('./index');

// middleware
const checkToken = require('../middleware/authorizer.middleware')

//controllers
const clientFileController = require('../controllers/clientFile/persist.controller');

express.router.post('/client/:idClient/file', checkToken, clientFileController.registerClientFile);

module.exports = express.router;
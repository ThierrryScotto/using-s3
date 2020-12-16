"use strict"

// dependencies
const express = require('./index');

// middleware
const checkToken = require('../middleware/authorizer.middleware')

//controllers
const clientFilePersistController = require('../controllers/clientFile/persist.controller');
const clientFileRetrieveController = require('../controllers/clientFile/retrive.controller.');

express.router.post('/client/file', checkToken, clientFilePersistController.registerClientFile);
express.router.get('/client/:clientId/file/:fileName', checkToken, clientFileRetrieveController.getClientFile);

module.exports = express.router;
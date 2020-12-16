'use strict';

// dependencies
const express = require('./index');

//controllers
const tokenController = require('../controllers/token/check.controller');

express.router.post('/authenticate', tokenController.checkToken);

module.exports = express.router;
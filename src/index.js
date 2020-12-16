'use strict';

// dependecies
const router = require('./routes/index');

// routes
const auth       = require('./routes/_auth');
const client     = require('./routes/_client');
const clientFile = require('./routes/_clientFile');

// constant
const basePath = '/v1';

router.express.use(`${basePath}`, auth);
router.express.use(`${basePath}`, client);
router.express.use(`${basePath}`, clientFile);
'use strict';

// dependecies
const router = require('./routes/index');

// routes
const auth = require('./routes/_auth');
const client  = require('./routes/_client');

// constant
const basePath = '/v1';

router.express.use(`${basePath}`, auth);
router.express.use(`${basePath}`, client);
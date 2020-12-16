'use strict';

const { checkToken } = require('../helpers/jwt');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: 'You need an access token' });
  }

  if (!checkToken(authHeader)) {
    return res.status(401).send({ error: 'Invalid token' })
  }  

  next();
}
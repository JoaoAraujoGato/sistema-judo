const express = require('express');
const session_routes = express.Router();

const SessionController = require('../controller/session.controller');
const SessionValidator = require('../validators/session.validator');

session_routes.post("/login", SessionValidator.signIn, SessionController.signIn);

module.exports = session_routes;
const express = require('express');
const session_routes = express.Router();

const SessionController = require('../controller/session.controller');
const SessionValidator = require('../validators/session.validator');

session_routes.post("/login", SessionValidator.signIn, SessionController.signIn);
session_routes.post("/forgot-password", SessionValidator.forgotPassword, SessionController.forgotPassword);

module.exports = session_routes;
const express = require('express');
const presenca_routes = express.Router();
const auth = require("../middlewares/authentication");

const PresencaController = require('../controller/presenca.controller');
const PresencaValidator = require('../validators/presenca.validator');

presenca_routes.get("/presenca/:id", PresencaValidator.getById, auth.authenticateToken, PresencaController.getById);
presenca_routes.get("/presenca", PresencaValidator.getByFilter, auth.authenticateToken, PresencaController.getByFilter);
presenca_routes.get("/presencas", auth.authenticateToken, PresencaController.getAll);
presenca_routes.post("/presenca", PresencaValidator.create, auth.authenticateToken, PresencaController.create);
presenca_routes.put("/presenca/:id", PresencaValidator.updateById, auth.authenticateToken, PresencaController.updateById);
presenca_routes.delete("/presenca/:id", PresencaValidator.deleteById, auth.authenticateToken, PresencaController.deleteById);

module.exports = presenca_routes;
const express = require('express');
const evento_routes = express.Router();
const auth = require("../middlewares/authentication");

const EventoController = require('../controller/evento.controller');
const EventoValidator = require('../validators/evento.validator');

evento_routes.get("/evento/:id", EventoValidator.getById, auth.authenticateToken, EventoController.getById);
evento_routes.get("/evento", EventoValidator.getByFilter, auth.authenticateToken, EventoController.getByFilter);
evento_routes.get("/eventos", EventoController.getAll);
evento_routes.post("/evento", EventoValidator.create, auth.authenticateToken, EventoController.create);
evento_routes.put("/evento/:id", EventoValidator.updateById, auth.authenticateToken, EventoController.updateById);
evento_routes.delete("/evento/:id", EventoValidator.deleteById, auth.authenticateToken, EventoController.deleteById);

module.exports = evento_routes;
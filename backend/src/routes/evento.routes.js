const express = require('express');
const evento_routes = express.Router();

const EventoController = require('../controller/evento.controller');
const EventoValidator = require('../validators/evento.validator');

evento_routes.get("/evento/:id", EventoValidator.getById, EventoController.getById);
evento_routes.get("/evento", EventoValidator.getByFilter, EventoController.getByFilter);
evento_routes.get("/eventos", EventoController.getAll);
evento_routes.post("/evento", EventoValidator.create, EventoController.create);
evento_routes.put("/evento/:id", EventoValidator.updateById, EventoController.updateById);
evento_routes.delete("/evento/:id", EventoValidator.deleteById, EventoController.deleteById);

module.exports = evento_routes;
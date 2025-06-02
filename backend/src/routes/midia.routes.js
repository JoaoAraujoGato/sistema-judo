const express = require('express');
const midia_routes = express.Router();

const MidiaController = require('../controller/midia.controller');
const MidiaValidator = require('../validators/midia.validator');

midia_routes.get("/midia/:id", MidiaValidator.getById, MidiaController.getById);
midia_routes.get("/midia", MidiaValidator.getByFilter, MidiaController.getByFilter);
midia_routes.get("/midias", MidiaController.getAll);
midia_routes.post("/midia", MidiaValidator.create, MidiaController.create);
midia_routes.put("/midia/:id", MidiaValidator.updateById, MidiaController.updateById);
midia_routes.delete("/midia/:id", MidiaValidator.deleteById, MidiaController.deleteById);

module.exports = midia_routes;
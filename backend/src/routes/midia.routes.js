const express = require('express');
const midia_routes = express.Router();
const auth = require("../middlewares/authentication");

const MidiaController = require('../controller/midia.controller');
const MidiaValidator = require('../validators/midia.validator');

midia_routes.get("/midia/:id", MidiaValidator.getById, auth.authenticateToken, MidiaController.getById);
midia_routes.get("/midia", MidiaValidator.getByFilter, MidiaController.getByFilter);
midia_routes.get("/midias", MidiaController.getAll);
midia_routes.post("/midia", MidiaValidator.create, auth.authenticateToken, MidiaController.create);
midia_routes.put("/midia/:id", MidiaValidator.updateById, auth.authenticateToken, MidiaController.updateById);
midia_routes.delete("/midia/:id", MidiaValidator.deleteById, auth.authenticateToken, MidiaController.deleteById);

module.exports = midia_routes;
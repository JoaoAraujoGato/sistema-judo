const express = require('express');
const treino_routes = express.Router();

const TreinoController = require('../controller/treino.controller');
const TreinoValidator = require('../validators/treino.validator');

treino_routes.get("/treino/:id", TreinoValidator.getById, TreinoController.getById);
treino_routes.get("/treino", TreinoValidator.getByFilter, TreinoController.getByFilter);
treino_routes.get("/treinos", TreinoController.getAll);
treino_routes.post("/treino", TreinoValidator.create, TreinoController.create);
treino_routes.put("/treino/:id", TreinoValidator.updateById, TreinoController.updateById);
treino_routes.delete("/treino/:id", TreinoValidator.deleteById, TreinoController.deleteById);

module.exports = treino_routes;
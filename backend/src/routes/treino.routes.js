const express = require('express');
const treino_routes = express.Router();
const auth = require("../middlewares/authentication");

const TreinoController = require('../controller/treino.controller');
const TreinoValidator = require('../validators/treino.validator');

treino_routes.get("/treino/:id", TreinoValidator.getById, auth.authenticateToken, TreinoController.getById);
treino_routes.get("/treino", TreinoValidator.getByFilter, auth.authenticateToken, TreinoController.getByFilter);
treino_routes.get("/treinos", auth.authenticateToken, TreinoController.getAll);
treino_routes.post("/treino", TreinoValidator.create, auth.authenticateToken, TreinoController.create);
treino_routes.put("/treino/:id", TreinoValidator.updateById, auth.authenticateToken, TreinoController.updateById);
treino_routes.delete("/treino/:id", TreinoValidator.deleteById, auth.authenticateToken, TreinoController.deleteById);

module.exports = treino_routes;
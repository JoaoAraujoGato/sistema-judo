const express = require('express');
const troca_faixa_routes = express.Router();
const auth = require("../middlewares/authentication");

const TrocaFaixaController = require('../controller/troca-faixa.controller');
const TrocaFaixaValidator = require('../validators/troca-faixa.validator');

troca_faixa_routes.get("/troca-faixa/:id", TrocaFaixaValidator.getById, auth.authenticateToken, TrocaFaixaController.getById);
troca_faixa_routes.get("/troca-faixa", TrocaFaixaValidator.getByFilter, auth.authenticateToken, TrocaFaixaController.getByFilter);
troca_faixa_routes.get("/trocas-faixa", auth.authenticateToken, TrocaFaixaController.getAll);
troca_faixa_routes.post("/troca-faixa", TrocaFaixaValidator.create, auth.authenticateToken, TrocaFaixaController.create);
troca_faixa_routes.put("/troca-faixa/:id", TrocaFaixaValidator.updateById, auth.authenticateToken, TrocaFaixaController.updateById);
troca_faixa_routes.delete("/troca-faixa/:id", TrocaFaixaValidator.deleteById, auth.authenticateToken, TrocaFaixaController.deleteById);

module.exports = troca_faixa_routes;
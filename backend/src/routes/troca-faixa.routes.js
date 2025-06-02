const express = require('express');
const troca_faixa_routes = express.Router();

const TrocaFaixaController = require('../controller/troca-faixa.controller');
const TrocaFaixaValidator = require('../validators/troca-faixa.validator');

troca_faixa_routes.get("/troca-faixa/:id", TrocaFaixaValidator.getById, TrocaFaixaController.getById);
troca_faixa_routes.get("/troca-faixa", TrocaFaixaValidator.getByFilter, TrocaFaixaController.getByFilter);
troca_faixa_routes.get("/trocas-faixa", TrocaFaixaController.getAll);
troca_faixa_routes.post("/troca-faixa", TrocaFaixaValidator.create, TrocaFaixaController.create);
troca_faixa_routes.put("/troca-faixa/:id", TrocaFaixaValidator.updateById, TrocaFaixaController.updateById);
troca_faixa_routes.delete("/troca-faixa/:id", TrocaFaixaValidator.deleteById, TrocaFaixaController.deleteById);

module.exports = troca_faixa_routes;
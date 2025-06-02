const express = require('express');
const aluno_routes = express.Router();

const AlunoController = require('../controller/aluno.controller');
const AlunoValidator = require('../validators/aluno.validator');

aluno_routes.get("/aluno/:id", AlunoValidator.getById, AlunoController.getById);
aluno_routes.get("/aluno", AlunoValidator.getByFilter, AlunoController.getByFilter);
aluno_routes.get("/alunos", AlunoController.getAll);
aluno_routes.post("/aluno", AlunoValidator.create, AlunoController.create);
aluno_routes.put("/aluno/:id", AlunoValidator.updateById, AlunoController.updateById);
aluno_routes.delete("/aluno/:id", AlunoValidator.deleteById, AlunoController.deleteById);

module.exports = aluno_routes;
const express = require('express');
const aluno_routes = express.Router();
const auth = require("../middlewares/authentication");

const AlunoController = require('../controller/aluno.controller');
const AlunoValidator = require('../validators/aluno.validator');

aluno_routes.get("/aluno/:id", AlunoValidator.getById, auth.authenticateToken, AlunoController.getById);
aluno_routes.get("/aluno", AlunoValidator.getByFilter, auth.authenticateToken, AlunoController.getByFilter);
aluno_routes.get("/alunos", auth.authenticateToken, AlunoController.getAll);
aluno_routes.post("/aluno", AlunoValidator.create, auth.authenticateToken, AlunoController.create);
aluno_routes.put("/aluno/:id", AlunoValidator.updateById, auth.authenticateToken, AlunoController.updateById);
aluno_routes.delete("/aluno/:id", AlunoValidator.deleteById, auth.authenticateToken, AlunoController.deleteById);

module.exports = aluno_routes;
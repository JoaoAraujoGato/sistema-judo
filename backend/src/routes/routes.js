const express = require('express');
const routes = express.Router();

const aluno_routes = require("./aluno.routes");
const evento_routes = require("./evento.routes");
const midia_routes = require("./midia.routes");
const sensei_routes = require("./sensei.routes");
const treino_routes = require("./treino.routes");
const troca_faixa_routes = require("./troca-faixa.routes");
const session_routes = require("./session.routes");
const presenca_routes = require('./presenca.routes');

// Monta os grupos de rotas com prefixos opcionais
routes.use(aluno_routes);
routes.use(evento_routes);
routes.use(midia_routes);
routes.use(presenca_routes_routes);
routes.use(sensei_routes);
routes.use(session_routes);
routes.use(treino_routes);
routes.use(troca_faixa_routes);

module.exports = routes;
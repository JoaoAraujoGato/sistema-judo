const express = require('express');
const sensei_routes = express.Router();
const auth = require("../middlewares/authentication");

const SenseiController = require('../controller/sensei.controller');
const SenseiValidator = require('../validators/sensei.validator');

sensei_routes.get("/sensei/:id", SenseiValidator.getById, auth.authenticateToken, SenseiController.getById);
sensei_routes.get("/senseis", auth.authenticateToken, SenseiController.getAll);
sensei_routes.post("/sensei", SenseiValidator.create, auth.authenticateToken, SenseiController.create);
sensei_routes.put("/sensei/:id", SenseiValidator.updateById, auth.authenticateToken, SenseiController.updateById);
sensei_routes.delete("/sensei/:id", SenseiValidator.deleteById, auth.authenticateToken, SenseiController.deleteById);

module.exports = sensei_routes;
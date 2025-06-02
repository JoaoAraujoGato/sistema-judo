const express = require('express');
const sensei_routes = express.Router();

const SenseiController = require('../controller/sensei.controller');
const SenseiValidator = require('../validators/sensei.validator');

sensei_routes.get("/sensei/:id", SenseiValidator.getById ,SenseiController.getById);
sensei_routes.post("/sensei", SenseiValidator.create ,SenseiController.create);
sensei_routes.put("/sensei/:id", SenseiValidator.updateById ,SenseiController.updateById);
sensei_routes.delete("/sensei/:id", SenseiValidator.deleteById ,SenseiController.deleteById);

module.exports = sensei_routes;
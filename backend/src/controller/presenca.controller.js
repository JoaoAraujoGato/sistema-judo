const PresencaModel = require('../models/presenca.model');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(req, res) {
        try{
            const nova_presenca = req.body;
            nova_presenca.id = uuidv4();

            const result = await PresencaModel.create(nova_presenca);
            return res.status(200).json({id: result});
        } catch (error) {
            console.warn("Presenca creation failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Presenca",
            }));
        }
    },

    async getById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await PresencaModel.getById(id);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Presenca getAll failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getById Presenca",
            }));
        }
    },

    async getAll(req, res) {
        try{
            const result = await PresencaModel.getAll();
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Presenca getAll failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getAll Presenca",
            }));
        }
    },

    async updateById(req, res) {
        try{
            const { id } = req.params;
            const presenca = req.body;
            
            const result = await PresencaModel.updateById(id, presenca);
            
            if(result === 0) {
                return res.status(400).json({ notification: "Presenca não foi atualizado"})
            }
            return res.status(200).json({ notification: "Presenca atualizado"});
        } catch (error) {
            console.warn("Presenca updateById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Presenca",
            }));
        }
    },
            
    async getByFilter(req, res) {
        try{
            const filters = req.query;
            
            const result = await PresencaModel.getByFilter(filters);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Presenca getByFilter failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getByFilter Presenca",
            }));
        }
    },

    async deleteById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await PresencaModel.deleteById(id);

            if(result === 0) {
                return res.status(400).json({ notification: "Id de presenca não encontrado"})
            }
            return res.status(200).json({ notification: "Presenca deletado"});
        } catch (error) {
            console.warn("Presenca deleteById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Presenca",
            }));
        }
    },
}
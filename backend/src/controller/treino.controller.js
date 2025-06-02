const TreinoModel = require('../models/treino.model');

module.exports = {
    async create(req, res) {
        try{
            const novo_treino = req.body;

            const result = await TreinoModel.create(novo_treino);
            return res.status(200).json({id: result});
        } catch (error) {
            console.warn("Treino creation failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Treino",
            }));
        }
    },

    async getById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await TreinoModel.getById(id);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Treino getAll failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getById Treino",
            }));
        }
    },

    async getAll(req, res) {
        try{
            const result = await TreinoModel.getAll();
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Treino getAll failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getAll Treino",
            }));
        }
    },

    async updateById(req, res) {
        try{
            const { id } = req.params;
            const treino = req.body;
            
            const result = await TreinoModel.updateById(id, treino);
            
            if(result === 0) {
                return res.status(400).json({ notification: "Treino não foi atualizado"})
            }
            return res.status(200).json({ notification: "Treino atualizado"});
        } catch (error) {
            console.warn("Treino updateById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Treino",
            }));
        }
    },
            
    async getByFilter(req, res) {
        try{
            const filters = req.query;
            
            const result = await TreinoModel.getByFilter(filters);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Treino getByFilter failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getByFilter Treino",
            }));
        }
    },

    async deleteById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await TreinoModel.deleteById(id);

            if(result === 0) {
                return res.status(400).json({ notification: "Id de treino não encontrado"})
            }
            return res.status(200).json({ notification: "Treino deletado"});
        } catch (error) {
            console.warn("Treino deleteById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Treino",
            }));
        }
    },
}
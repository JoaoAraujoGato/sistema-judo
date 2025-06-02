const MidiaModel = require('../models/midia.model');

module.exports = {
    async create(req, res) {
        try{
            const nova_midia = req.body;

            const result = await MidiaModel.create(nova_midia);
            return res.status(200).json({id: result});
        } catch (error) {
            console.warn("Midia creation failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Midia",
            }));
        }
    },

    async getById(req, res) {
        try{
            const result = await MidiaModel.getById(id);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Midia getById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getById Midia",
            }));
        }
    },

    async getAll(req, res) {
        try{
            const result = await MidiaModel.getAll();
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Midia getAll failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getAll Midia",
            }));
        }
    },
        
    async getByFilter(req, res) {
        try{
            const filters = req.query;
            
            const result = await MidiaModel.getByFilter(filters);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Midia getByFilter failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getByFilter Midia",
            }));
        }
    },

    async updateById(req, res) {
        try{
            
            const result = await MidiaModel.updateById(id, midia);
            
            if(result === 0) {
                return res.status(400).json({ notification: "Mídia não foi atualizada"})
            }
            return res.status(200).json({ notification: "Mídia atualizada"});
        } catch (error) {
            console.warn("Midia updateById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Midia",
            }));
        }
    },

    async deleteById(req, res) {
        try{
            const result = await MidiaModel.deleteById(id);

            if(result === 0) {
                return res.status(400).json({ notification: "Id de mídia não encontrada"})
            }
            return res.status(200).json({ notification: "Mídia deletada"});
        } catch (error) {
            console.warn("Midia deleteById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Midia",
            }));
        }
    },
}
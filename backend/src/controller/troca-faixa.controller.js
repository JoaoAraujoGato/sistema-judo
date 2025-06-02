const TrocaFaixaModel = require('../models/troca-faixa.model');

module.exports = {
    async create(req, res) {
        try{
            const nova_troca_faixa = req.body;

            const result = await TrocaFaixaModel.create(nova_troca_faixa);
            return res.status(200).json({id: result});
        } catch (error) {
            console.warn("Troca faixa creation failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Troca faixa",
            }));
        }
    },

    async getById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await TrocaFaixaModel.getById(id);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Troca faixa getById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getById Troca faixa",
            }));
        }
    },

    async getAll(req, res) {
        try{
            const result = await TrocaFaixaModel.getAll();
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Troca faixa getAll failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getAll Troca faixa",
            }));
        }
    },
                
    async getByFilter(req, res) {
        try{
            const filters = req.query;
            
            const result = await TrocaFaixaModel.getByFilter(filters);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Troca faixa getByFilter failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getByFilter Troca faixa",
            }));
        }
    },

    async updateById(req, res) {
        try{
            const { id } = req.params;
            const troca_faixa = req.body;
            
            const result = await TrocaFaixaModel.updateById(id, troca_faixa);
            
            if(result === 0) {
                return res.status(400).json({ notification: "Troca de faixa não foi atualizada"})
            }
            return res.status(200).json({ notification: "Troca de faixa atualizada"});
        } catch (error) {
            console.warn("Troca faixa updateById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Troca faixa",
            }));
        }
    },

    async deleteById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await TrocaFaixaModel.deleteById(id);

            if(result === 0) {
                return res.status(400).json({ notification: "Id de troca de faixa não encontrada"})
            }
            return res.status(200).json({ notification: "Troca de faixa deletada"});
        } catch (error) {
            console.warn("Troca faixa deleteById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Troca faixa",
            }));
        }
    },
}
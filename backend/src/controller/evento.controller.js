const EventoModel = require('../models/evento.model');

module.exports = {
    async create(req, res) {
        try{
            const novo_evento = req.body;

            const result = await EventoModel.create(novo_evento);
            return res.status(200).json({id: result});
        } catch (error) {
            console.warn("Evento creation failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Evento",
            }));
        }
    },

    async getById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await EventoModel.getById(id);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Evento getById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getById Evento",
            }));
        }
    },

    async getAll(req, res) {
        try{
            const result = await EventoModel.getAll();
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Evento getAll failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getAll Evento",
            }));
        }
    },
    
    async getByFilter(req, res) {
        try{
            const filters = req.query;
            
            const result = await EventoModel.getByFilter(filters);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Evento getByFilter failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getByFilter Evento",
            }));
        }
    },

    async updateById(req, res) {
        try{
            const { id } = req.params;
            const evento = req.body;
            
            const result = await EventoModel.updateById(id, evento);
            
            if(result === 0) {
                return res.status(400).json({ notification: "Evento não foi atualizado"})
            }
            return res.status(200).json({ notification: "Evento atualizado"});
        } catch (error) {
            console.warn("Evento updateById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to updateById Evento",
            }));
        }
    },

    async deleteById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await EventoModel.deleteById(id);
            
            if(result === 0) {
                return res.status(400).json({ notification: "Id de evento não encontrado"})
            }
            return res.status(200).json({ notification: "Evento deletado"});
        } catch (error) {
            console.warn("Evento deleteById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to deleteById Evento",
            }));
        }
    },
}
const SenseiModel = require('../models/sensei.model');
const Firebase = require('../utils/firebase');

module.exports = {
    async create(req, res) {
        try{
            const novo_sensei = req.body;

            const uid = await Firebase.createNewUser(novo_sensei.email, novo_sensei.senha);

            delete novo_sensei.senha;
            novo_sensei.firebase_id = uid;

            const result = await SenseiModel.create(novo_sensei);
            return res.status(200).json({id: result});
        } catch (error) {
            console.warn("Sensei creation failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Sensei",
            }));
        }
    },

    async getById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await SenseiModel.getById(id);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Sensei getById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getById Sensei",
            }));
        }
    },

    async getAll(req, res) {
        try{
            const result = await SenseiModel.getAll();
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Sensei getAll failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getAll Sensei",
            }));
        }
    },

    async updateById(req, res) {
        try{
            const { id } = req.params;
            const sensei = req.body;

            console.log('sensei >>>', sensei);
            
            const result = await SenseiModel.updateById(id, sensei);
            
            if(result === 0) {
                return res.status(400).json({ notification: "Sensei não foi atualizado"})
            }
            return res.status(200).json({ notification: "Sensei atualizado"});
        } catch (error) {
            console.warn("Sensei updateById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Sensei",
            }));
        }
    },

    async deleteById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await SenseiModel.deleteById(id);
            
            if(result === 0) {
                return res.status(400).json({ notification: "Id de sensei não encontrado"})
            }
            return res.status(200).json({ notification: "Sensei deletado"});
        } catch (error) {
            console.warn("Sensei deleteById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Sensei",
            }));
        }
    },
}
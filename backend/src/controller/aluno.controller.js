const { getCurrentDate } = require('../../../frontend/src/regras_negocio/utils/data-helpers');
const AlunoModel = require('../models/aluno.model');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(req, res) {
        try{
            const novo_aluno = req.body;
            
            novo_aluno.id = uuidv4();
            //Colocar no front depois
            // const dataCriacao = getCurrentDate();
            // novo_aluno.data_cadastro = dataCriacao;

            const result = await AlunoModel.create(novo_aluno);
            return res.status(200).json({id: result});
        } catch (error) {
            console.warn("Aluno creation failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to create Aluno",
            }));
        }
    },

    async getById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await AlunoModel.getById(id);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Aluno getById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getById Aluno",
            }));
        }
    },

    async getAll(req, res) {
        try{
            const result = await AlunoModel.getAll();
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Aluno getAll failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getAll Aluno",
            }));
        }
    },

    async getByFilter(req, res) {
        try{
            const filters = req.query;
            
            const result = await AlunoModel.getByFilter(filters);
            return res.status(200).json(result);
        } catch (error) {
            console.warn("Aluno getByFilter failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to getByFilter Aluno",
            }));
        }
    },

    async updateById(req, res) {
        try{
            const { id } = req.params;
            const aluno = req.body;
            
            const result = await AlunoModel.updateById(id, aluno);
            
            if(result === 0) {
                return res.status(400).json({ notification: "Aluno não foi atualizado"})
            }
            return res.status(200).json({ notification: "Aluno atualizado"});
        } catch (error) {
            console.warn("Aluno updateById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to updateById Aluno",
            }));
        }
    },

    async deleteById(req, res) {
        try{
            const { id } = req.params;
            
            const result = await AlunoModel.deleteById(id);

            if(result === 0) {
                return res.status(400).json({ notification: "Id de aluno não encontrado"})
            }
            return res.status(200).json({ notification: "Aluno deletado"});
        } catch (error) {
            console.warn("Aluno deleteById failed: " + error);
            return (res.status(500).json({
                notification: "Internal server error while trying to deleteById Aluno",
            }));
        }
    },
}
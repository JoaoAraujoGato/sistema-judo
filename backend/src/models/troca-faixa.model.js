const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(troca_faixa) {
        const id = uuidv4();

        troca_faixa.id = id;
        await connection("troca_faixa").insert(troca_faixa);
        return id;
    },

    async getById(id) {
        const result = await connection("troca_faixa")
            .where({id})
            .select("*")
            .first();

        return result;
    },
    
    async getAll() {
        const result = await connection("troca_faixa").select("*");

        return result;
    },
    
    async getByFilter(filters) {
        const query = connection("troca_faixa").select("*");

        // Filtro por id_aluno
        if (filters?.id_aluno) {
            query.where("id_aluno", filters.id_aluno);
        }

        // Filtro por data (entre data_inicio e data_fim)
        if (filters?.data_inicio && filters?.data_fim) {
            query.whereBetween("data", [filters.data_inicio, filters.data_fim]);
        } else if (filters?.data_inicio) {
            query.where("data", ">=", filters.data_inicio);
        } else if (filters?.data_fim) {
            query.where("data", "<=", filters.data_fim);
        }

        // Adicione aqui outros filtros conforme necessário
        if (filters?.faixa_anterior) {
            query.where("faixa_anterior", filters.faixa_anterior);
        }

        if (filters?.faixa_nova) {
            query.where("faixa_nova", filters.faixa_nova);
        }

        const result = await query;
        return result;
    },
    
    async updateById(id, troca_faixa) {
        const result = await connection("troca_faixa").where({id}).update(troca_faixa);
        return result;
    },
    
    async deleteById(id) {
        const result = await connection("troca_faixa").where({id}).delete();
        return result;
    }
}
const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(presenca) {
        const id = uuidv4();

        presenca.id = id;
        await connection("presenca").insert(presenca);
        return id;
    },

    async getById(id) {
        const result = await connection("presenca")
            .where({id})
            .select("*")
            .first();

        return result;
    },
    
    async getAll() {
        const result = await connection("presenca").select("*");

        return result;
    },

    async getByFilter(filters) {
        const query = connection("presenca").select("*");

        // Filtro por nome (parcial, com LIKE)
        if (filters?.turma) {
            query.where("turma", "like", `%${filters.turma}%`);
        }

        // Filtro por data (entre data_inicio e data_fim)
        if (filters?.data_inicio && filters?.data_fim) {
            query.whereBetween("data", [filters.data_inicio, filters.data_fim]);
        } else if (filters?.data_inicio) {
            query.where("data", ">=", filters.data_inicio);
        } else if (filters?.data_fim) {
            query.where("data", "<=", filters.data_fim);
        }

        const result = await query;
        return result;
    },
    
    async updateById(id, presenca) {
        const result = await connection("presenca").where({id}).update(presenca);
        return result;
    },
    
    async deleteById(id) {
        const result = await connection("presenca").where({id}).delete();
        return result;
    }
}
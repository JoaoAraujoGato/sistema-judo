const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(midia) {
        const id = uuidv4();

        midia.id = id;
        await connection("midia").insert(midia);
        return id;
    },

    async getById(id) {
        const result = await connection("midia")
            .where({id})
            .select("*")
            .first();

        return result;
    },
    
    async getAll() {
        const result = await connection("midia").select("*");

        return result;
    },

    async getByFilter(filters) {
        const query = connection("midia").select("*");

        if (filters?.tipo) {
            query.where("tipo", "like", `%${filters.tipo}%`);
        }

        // Filtro por data_upload	 (entre data_inicio e data_fim)
        if (filters?.data_inicio && filters?.data_fim) {
            query.whereBetween("data_upload", [filters.data_inicio, filters.data_fim]);
        } else if (filters?.data_inicio) {
            query.where("data_upload", ">=", filters.data_inicio);
        } else if (filters?.data_fim) {
            query.where("data_upload", "<=", filters.data_fim);
        }

        const result = await query;
        return result;
    },
    
    async updateById(id, midia) {
        const result = await connection("midia").where({id}).update(midia);
        return result;
    },
    
    async deleteById(id) {
        const result = await connection("midia").where({id}).delete();
        return result;
    }
}
const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(evento) {
        const id = uuidv4();

        evento.id = id;
        await connection("evento").insert(evento);
        return id;
    },

    async getById(id) {
        const result = await connection("evento")
            .where({id})
            .select("*")
            .first();

        return result;
    },
    
    async getAll() {
        const result = await connection("evento").select("*");

        return result;
    },

    async getByFilter(filters) {
        const query = connection("evento").select("*");

        if (filters?.nome) {
            query.where("nome", "like", `%${filters.nome}%`);
        }

        if (filters?.local) {
            query.where("local", "like", `%${filters.local}%`);
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

    async updateById(id, evento) {
        const result = await connection("evento").where({id}).update(evento);
        return result;
    },
    
    async deleteById(id) {
        const result = await connection("evento").where({id}).delete();
        return result;
    }
}
const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(treino) {
        const id = uuidv4();

        treino.id = id;
        await connection("treino").insert(treino);
        return id;
    },

    async getById(id) {
        const result = await connection("treino")
            .where({id})
            .select("*")
            .first();

        return result;
    },
    
    async getAll() {
        const result = await connection("treino").select("*");

        return result;
    },

    async getByFilter(filters) {
        const query = connection("treino").select("*");

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

        // Paginação
        // const page = parseInt(filters.page) || 1;          // página atual (padrão 1)
        // const pageSize = parseInt(filters.pageSize) || 10; // itens por página (padrão 10)
        // const offset = (page - 1) * pageSize;

        // query.limit(pageSize).offset(offset);

        const result = await query;
        return result;
    },
    
    async updateById(id, treino) {
        const result = await connection("treino").where({id}).update(treino);
        return result;
    },
    
    async deleteById(id) {
        const result = await connection("treino").where({id}).delete();
        return result;
    }
}
const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(aluno) {
        const id = uuidv4();

        aluno.id = id;
        await connection("aluno").insert(aluno);
        return id;
    },

    async getById(id) {
        const result = await connection("aluno")
            .where({id})
            .select("*")
            .first();

        return result;
    },
    
    async getAll() {
        const result = await connection("aluno").select("*");

        return result;
    },

    async getByFilter(filters) {
        const query = connection("aluno").select("*");

        // Filtro por nome (parcial, com LIKE)
        if (filters?.nome) {
            query.where("nome", "like", `%${filters.nome}%`);
        }

        if (filters?.nome_pai_responsavel) {
            query.where("nome_pai_responsavel", "like", `%${filters.nome_pai_responsavel}%`);
        }

        if (filters?.nome_mae_responsavel) {
            query.where("nome_mae_responsavel", "like", `%${filters.nome_mae_responsavel}%`);
        }

        if (filters?.turma) {
            query.where("turma", "like", `%${filters.turma}%`);
        }
        
        if (filters?.faixa_atual) {
            query.where("faixa_atual", "like", `%${filters.faixa_atual}%`);
        }

        // Filtro por data_cadastro (entre data_inicio e data_fim)
        if (filters?.data_inicio && filters?.data_fim) {
            query.whereBetween("data_cadastro", [filters.data_inicio, filters.data_fim]);
        } else if (filters?.data_inicio) {
            query.where("data_cadastro", ">=", filters.data_inicio);
        } else if (filters?.data_fim) {
            query.where("data_cadastro", "<=", filters.data_fim);
        }

        // Filtro booleano: matricula_ativa
        if (filters?.matricula_ativa !== undefined) {
            const valorBooleano = filters.matricula_ativa === true || filters.matricula_ativa === "true";
            query.where("matricula_ativa", valorBooleano);
        }

        const result = await query;
        return result;
    },
    
    async updateById(id, aluno) {
        const result = await connection("aluno").where({id}).update(aluno);
        return result;
    },
    
    async deleteById(id) {
        const result = await connection("aluno").where({id}).delete();
        return result;
    }
}
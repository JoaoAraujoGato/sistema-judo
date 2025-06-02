const { CORES_FAIXAS } = require("../../../../regras_negocio/constants/cor_faixa");
const { TURMAS } = require("../../../../regras_negocio/constants/turma");

//  exports.up faz as alterações que voce quer, ou seja, nesse primeiro momento vamos fazer a criação da tabela
exports.up = function(knex) {
  return knex.schema.createTable('aluno', (table) => {
    table.string('id').primary().notNullable();
    table.string('nome').notNullable();
    table.string('email');
    table.date('data_nascimento');
    table.string('telefone_responsavel');
    table.string('nome_pai_responsavel');
    table.string('nome_mae_responsavel');
    table.enu('turma', Object.values(TURMAS));
    table.enu('faixa_atual', Object.values(CORES_FAIXAS));
    table.date('data_cadastro').notNullable();
    table.boolean('matricula_ativa').notNullable();
    table.string('foto_url');
  })
};

//  exports.down remove o que a gente fez, vamos desfazer o que fizemos, nesse caso a tabela
exports.down = function(knex) {
  return knex.schema.dropTable('aluno')
};


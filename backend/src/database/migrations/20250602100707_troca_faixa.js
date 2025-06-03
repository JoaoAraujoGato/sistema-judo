const { TURMAS } = require("../../../../frontend/src/regras_negocio/constants/turma");
const { CORES_FAIXAS } = require("../../../../frontend/src/regras_negocio/constants/cor_faixa");

exports.up = function(knex) {
  return knex.schema.createTable('troca_faixa', (table) => {
    table.string('id').primary().notNullable();
    table.string('id_aluno').notNullable();
    table.foreign('id_aluno').references('id').inTable('aluno').onDelete('cascade')
    table.date('data');
    table.enu('faixa_anterior', Object.values(CORES_FAIXAS));
    table.enu('faixa_nova', Object.values(CORES_FAIXAS));
    table.string('observacao');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('troca_faixa')
};


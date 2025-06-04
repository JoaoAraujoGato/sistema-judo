const { TURMAS } = require("../../../../frontend/src/regras_negocio/constants/turma");

exports.up = function(knex) {
  return knex.schema.createTable('treino', (table) => {
    table.string('id').primary().notNullable();
    table.string('duracao');
    table.string('descricao');
    table.enu('turma', Object.values(TURMAS));
    table.string('data');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('treino')
};


const { TURMAS } = require("../../../../frontend/src/regras_negocio/constants/turma");exports.up = function(knex) {

return knex.schema.createTable('presenca', (table) => {
    table.string('aluno_id');    
    table.string('nome_aluno').notNullable();
    table.string('sobrenome_aluno').notNullable();
    table.enu('turma', Object.values(TURMAS));
    table.string('data');
    table.boolean('presente').notNullable();

    table.unique(['aluno_id', 'turma', 'data']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('presenca');
};

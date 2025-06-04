exports.up = function(knex) {
  return knex.schema.alterTable('treino', (table) => {
    table.string('horario');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('treino', (table) => {
    table.dropColumn('horario');
  });
};

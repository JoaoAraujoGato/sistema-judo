exports.up = function(knex) {
  return knex.schema.createTable('evento', (table) => {
    table.string('id').primary().notNullable();
    table.string('nome');
    table.string('local');
    table.string('observacao');
    table.string('data');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('evento')
};


const { TIPO_MIDIA } = require("../../../../frontend/src/regras_negocio/constants/midia");

exports.up = function(knex) {
  return knex.schema.createTable('midia', (table) => {
    table.string('id').primary().notNullable();
    table.enu('tipo', Object.values(TIPO_MIDIA)).notNullable();
    table.string('url_arquivo');
    table.string('descricao');
    table.string('data_upload');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('midia')
};


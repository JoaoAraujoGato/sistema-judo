const { GRADUACAO_FAIXAS_PRETAS, CORES_FAIXAS } = require("../../../../regras_negocio/constants/cor_faixa");

exports.up = function(knex) {
  return knex.schema.createTable('sensei', (table) => {
    table.string('id').primary().notNullable();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.enu('faixa_atual', Object.values(CORES_FAIXAS));
    table.enu('graduacao_faixa_preta', Object.values(GRADUACAO_FAIXAS_PRETAS));
    table.string('foto_url');
    table.string('firebase_id').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sensei')
};


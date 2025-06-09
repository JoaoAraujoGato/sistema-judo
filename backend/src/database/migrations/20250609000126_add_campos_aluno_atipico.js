/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('aluno', (table) => {
      table.string('perfil_neurodesenvolvimento');
      table.string('tipo_condicao');
    });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('aluno', (table) => {
      table.dropColumn('perfil_neurodesenvolvimento');
      table.dropColumn('tipo_condicao');
    });
};

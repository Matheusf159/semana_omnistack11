
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })// criar uma nova tabela
}; // método uo é resonsável pela criação da tabela

exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
}; // serve para deletar a tabela

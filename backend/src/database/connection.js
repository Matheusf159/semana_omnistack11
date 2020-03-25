const knex = require('knex')
const configuration = require('../../knexfile')

// criar a conexão
const connection = knex(configuration.development)

module.exports = connection
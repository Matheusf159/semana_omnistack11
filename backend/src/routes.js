const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes // exportando minhas rotas

/**
 *  MÉTODOS HTTP:
 * 
 *  GET: Buscar uma informação do back-end
 *  POST: Criar uma informaçãp no back-end
 *  PUT: Alterar uma informação no back-end
 *  DELETE: Deleter uma informação no back-end
 */

/**
 *  TIPOS DE PARÂMETROS:
 * 
 *  Query Params: Parâmetros nomeados enviados na rota após "?" (Filtos, paginação)
 *  Route Params: Parâmetros utilizados apara identificar recursos
 *  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
const express = require('express');
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes') // importando minhas rotas

const app = express();

// Converte json em objeto javascript (usado sempre antes das rotas)
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

 
module.exports = app
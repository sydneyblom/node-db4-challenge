const express = require('express');
const db = require('./data/db-config.js');
//create express application
const server = express();

//mount global middleware
server.use(express.json());

//import routers
const router = require('./Recipes/recipeRouter');

//mount routers
server.use('/api/recipes', router);

//export server
module.exports = server;
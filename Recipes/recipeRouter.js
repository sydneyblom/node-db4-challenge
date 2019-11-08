const express = require('express');

//create a router
const router = express.Router();

//import the database files
const recipeDB = require('./recipeModel');

/***********************************END POINTS*****************************/

router.get('/', (req, res) => {
})

router.get('/:id/shoppinglist', (req, res) => {

})

router.get('/:id/instructions', (req, res) => {

})


//export router
module.exports = router
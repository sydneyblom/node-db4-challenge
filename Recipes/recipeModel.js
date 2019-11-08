const express = require('express');

//import development object
const db = require('../Data/db-config');

//export CRUD methods
module.exports = {
    findRecipes,
    findShoppingList,
    findInstructions
};


//methods to perform CRUD operations
function findRecipes(){
    return db('recipes');

}

function findShoppingList(id){
    return db('recipes')
    .join('recipe_ingredients', 'recipes.id', '=', ['recipe_ingredients.recipe_id', 'recipe_ingredients.ingredient_id'])
    .join('ingredients', 'ingredients.id', '=', ['recipe_ingredients.recipe_id', 'recipe_ingredients.ingredient_id'])
    .where({ 'recipes.id': id})
    .select('recipes.recipe_name', 'ingredients.name', 'ingredients.quantity');


}

function findInstructions(id){
    return db('recipes')
    .join('instructions', 'recipes.id', '=', 'instructions.recipe_id')
    .where({ 'recipes.id': id })
    .select('instructions.step_number', 'instructions.instruction')
    .orderBy('instructions.step_number');

}
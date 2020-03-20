const db = require('../data/config')


module.exports ={
    getRecipes,
    getShoppingList,
    getInstructions,
    getSpecificRecipe
}


function getRecipes() {
return db('recipes')
}



function getSpecificRecipe(recipe_id) {
return db('recipes')
    .where({recipe_id})
    .first()

}



function getInstructions(recipe_id) {

}


function getShoppingList(recipe_id){

}
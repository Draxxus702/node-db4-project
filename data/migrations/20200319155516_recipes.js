exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id');

            tbl.string('Name')
            .notNullable();
            tbl.string('Description')
            .notNullable()
            .unique();
        }) //creates recipe name and description

    .createTable('steps', tbl => {
            tbl.increments('steps_id');

            tbl.integer('step_number')
            .notNullable();
            tbl.integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes')
            tbl.string('Instructions').notNullable()
        }) //creates steps with step number and recipe_ID

    .createTable('ingredients', tbl => {
            tbl.increments('ingredients_id');
    
            tbl.string('ingredient_name')
            .notNullable()
            .unique();
        })
    

    .createTable('recipe_ingredients', tbl => {

            tbl.integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes')
            tbl.integer('ingredient_id')
            .references('id')
            .inTable('ingredients')
            .notNullable();
            tbl.string('quantity')
            .notNullable();
        }) // this is the code for the intermediate table to join recipes with ingredients.

    }

exports.down = function(knex) {
    return (
        knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
    );
};

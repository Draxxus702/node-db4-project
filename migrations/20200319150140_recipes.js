
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl =>{
      tbl.increments()
      tbl.string('recipe_name', 128)
        .notNullable()
      tbl.string('Description')
        .notNullable()
        .unique()
  })
  .createTable('steps', tbl => {
    tbl.increments();
    tbl.number('step_number')
      .notNullable();
    tbl.integer('recipe_id')
    //   .unsigned()
      .unique()
      .notNullable()
    //   .references('id')
    //   .inTable('recipes')
    //   .onUpdate('CASCADE')
    //   .onDelete('CASCADE');
  })

  .createTable('recipe_ingredients', tbl =>{

      tbl.number('recpie_id').notNUllable()
      tbl.number('ingredient_id').notNullable()
      tbl.number('quantity').notNullable()
  })

  .createTable('ingredients', tbl =>{
      tbl.increments()

      tbl.string('ingredient_name')
        .notNullable()
        .unique()
  })
};


exports.down = function(knex) {
  return knex.schema
    .dropsTableIfExists('ingredients')
    .dropsTableIfExists('recipe_ingredients')
    .dropsTableIfExists('steps')
    .dropsTableIfExists('recipes')
};

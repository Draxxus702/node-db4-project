
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredients_id: 1, ingredient_name: 'batter'},
        {ingredients_id: 2, ingredient_name: 'milk'},
        {ingredients_id: 3, ingredient_name: 'chocolate'},
        {ingredients_id: 4, ingredient_name: 'noodles'},
        {ingredients_id: 5, ingredient_name: 'salmon'}
      ]);
    });
};

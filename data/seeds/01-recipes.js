
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {   recipe_id: 1,
            Name: 'Chocolate Milk',
            Description: 'This is how you make the perfect chocolate milk!'
          },
        {   recipe_id: 2,
            Name: 'Best Fluffy Pancakes',
            Description: 'Make the best fluffy pankcakes possible'
          },
        {   recipe_id: 3,
            Name: 'Salmon Pasta with Creamy Garlic Sauce',
            Description: 'Looks impressive EZPZ to make'
          }
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {   
            steps_id: 1,
            step_number: 1,
            recipe_id: 1,
            Instructions: 'pour 16oz of milk into a cup'
            },
        {
          steps_id: 2, 
          step_number: 2, 
          recipe_id: 1, 
          Instructions: 'add chocolate syrup'
        },
        {
          steps_id: 3, 
          step_number: 3, 
          recipe_id: 1, 
          Instructions: 'stir for 30 seconds and enjoy'
        },
        {
          steps_id: 4, 
          step_number: 1, 
          recipe_id: 2, 
          Instructions:"get pancake mix"
        },
        {
          steps_id: 5, 
          step_number: 2, 
          recipe_id: 2, 
          Instructions:"put into pan and cook for 5 minutes"
        },
        {
          steps_id: 6, 
          step_number: 3, 
          recipe_id: 2, 
          Instructions:"flip every 2 minutes until both sides are nice and brown"
        },
        {
          steps_id: 7, 
          step_number: 4, 
          recipe_id: 2, 
          Instructions:"enjoy"
        },
        {
          steps_id: 8, 
          step_number: 1, 
          recipe_id: 3, 
          Instructions:"Boil a large salted pot of water for your pasta. Cook using package directions until it's al dente."
        },
        {
          steps_id: 9, 
          step_number: 2, 
          recipe_id: 3, 
          Instructions:"Grate parmesan and set aside. Season the salmon lightly with onion powder and salt & pepper on both sides."
        },
        {
          steps_id: 10, 
          step_number: 3, 
          recipe_id: 3, 
          Instructions:"Add the olive oil and butter to a skillet on medium high heat. Once it's hot, add the salmon. Cook salmon for a couple of minutes on each side."
        },
        {
          steps_id: 11, 
          step_number: 4, 
          recipe_id: 3, 
          Instructions:"Take the salmon out of the pan and set aside. Add the white wine, lemon juice, cream, garlic, and parmesan, and scrape the bottom of the pan so the brown bits get incorporated into the sauce."
        },
        {
          steps_id: 12, 
          step_number: 5, 
          recipe_id: 3, 
          Instructions:"Slowly add the flour to the sauce, while stirring, to avoid any lumps."
        },
        {
          steps_id: 13, 
          step_number: 6, 
          recipe_id: 3, 
          Instructions:"Add the salmon back in the pan and break it up with your cooking spoon so it's in bite-size chunks. Gently mix it in with the sauce. Cook for an additional five minutes or so until the sauce is thickened and salmon is cooked through."
        },
        {
          steps_id: 14, 
          step_number: 7, 
          recipe_id: 3, 
          Instructions:"Drain pasta and add it to the skillet, along with 1 tablespoon of the water you cooked the pasta in. Gently mix the sauce and pasta. Serve immediately with parsley and extra parmesan cheese if desired."
        },
      ]);
    });
};

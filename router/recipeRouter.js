const express = require('express');

const recipe = require('./recipeModel.js');

const router = express.Router();


router.get('/', (req, res) => {
    recipe.getRecipes()
    .then(param => {
      res.json(param);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });



  router.get('/:id', (req,res) => {
    const id = req.params.id

      recipe.getSpecificRecipe(id)
      .then(param =>{
          if(param){
              res.json(param)
          } else{
              res.status(404).json({errorMessage:'Could not find recipe with given id'})
          }
      })
      .catch(err => {
          res.status(500).json({errorMessage:'not currently working'})
      })

  })










module.exports = router;
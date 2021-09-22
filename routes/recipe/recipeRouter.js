const express = require('express')
const router = express.Router()
const recipeController = require('./controller/recipeController')

router.get('/', function(req, res, next){
    recipeController.getAllRecipe({}, function(err, payload){
        if(err){
            res.status(500).json({
                message: "Error! Something went wrong!"
            })
        }
        else{
            res.json({
                message: "Recipe found!",
                payload
            })
        }
    })
})

router.post('/create-recipe', function(req, res){
    recipeController.createRecipe(req.body, function(err, savedRecipe){
        if(err){
            res.status(500).json({
                message: "Error! Something went wrong!"
            })
        }
        else{
            res.json({
                message: "Recipe created!",
                savedRecipe
            })
        }
    })
})

router.put('/update-recipe-by-id/:id', function(req, res){
    recipeController.updateRecipe(req.params.id, req.body, function(err, updatedRecipe){
        if(err){
            res.status(500).json({
                message: "Error! Something went wrong!"
            })
        }
        else{
            res.json({
                message: "Recipe updated!",
                updatedRecipe
            })
        }
    })
})

router.delete('/delete-recipe-by-id/:id', function(req, res){
    recipeController.deleteRecipe(req.params.id, function(err, deletedRecipe){
        if(err){
            res.status(500).json({
                message: "Error! Something went wrong!"
            })
        }
        else{
            res.json({
                message: "Recipe deleted!",
                deletedRecipe
            })
        }
    })
})

module.exports = router;
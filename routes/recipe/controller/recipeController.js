const Recipe = require("../model/Recipe")

module.exports ={
    getAllRecipe: function(body, callback){
        Recipe.find(body, function(err, payload){
            if(err){
                callback(err, null)
            }
            else{
                callback(null, payload)
            }
        })
    },
    createRecipe: function(body, callback){
        const createdRecipe = new Recipe({
            recipe : body.recipe,
            price : body.price
        })

        createdRecipe.save(function(err, savedRecipe){
            if(err){
                callback(err, null)
            }
            else{
                callback(null, savedRecipe)
            }
        })
    },
    deleteRecipe: function(id, callback){
        Recipe.findByIdAndDelete(id, function(err, deletedRecipe){
            if(err){
                callback(err, null)
            }
            else{
                callback(null, deletedRecipe)
            }
        })
    },
    updateRecipe: function(id, body, callback){
        Recipe.findByIdAndUpdate(id,body, {new : true}, function(err, updatedRecipe){
            if(err){
                callback(err, null)
            }
            else{
                callback(null, updatedRecipe)
            }
        })
    }
}
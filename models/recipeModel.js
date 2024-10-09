const mongoose = require('mongoose');
//creating the schema
const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    ingredients:{
        type:[String],
        required:true
    },

    procedure:{
        type : String,
        required:true
    },

    createdAt:{
        type: Date,
        default : Date.now
    }
});

//creating the recipe model from the schema
const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = Recipe;

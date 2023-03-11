const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://user:user@cluster0.stvhrzo.mongodb.net/?retryWrites=true&w=majority")

const Schema = mongoose.Schema;

var recipeSchema = new Schema(
    {
       image : String,
       titleName: String,
       duration:Number,
       servings : Number
    }
)

var RecipeInfo = mongoose.model("recipes",recipeSchema);
module.exports = RecipeInfo;
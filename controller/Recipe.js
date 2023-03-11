const RecipeInfo = require("../models/cuisineDb");

module.exports.getRecipes = async (req, res) => {
    try {
        let result = await RecipeInfo.find();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports.getRecipe = async (req, res) => {
    try {
        var {id} = req.params;
        let result = await RecipeInfo.findById({_id:id});
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports.addRecipe = async (req, res) => {
    try {
        let recipe = new RecipeInfo(req.body);
        recipe.save(); 
        if (recipe) {
            res.json({status:true});
        } else {
            res.json({status:false});
        }
    } catch (error) {
        res.json({status:false});
    }
}

module.exports.removeRecipe = async (req, res) => {
    try {
        await RecipeInfo.findOneAndDelete(req.body.titleName);
        res.send("data deleted");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports.updateRecipe = async (req, res) => {
    try {
        await RecipeInfo.findByIdAndUpdate(req.params.id, req.body);
        res.send("data updated");
    } catch (error) {
        res.status(500).send(error.message);
    }
}


//import express
const express = require("express");
const cors = require('cors');
const RecipeController = require("./controller/Recipe");
const app = new express();
const path = require('path');

app.use(express.static(path.join(__dirname,'/build')));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// get all recipe details
app.get('/api/getrecipes', RecipeController.getRecipes);

// get one recipe details
app.get('/api/getrecipe/:id', RecipeController.getRecipe);

// Add new recipe details
app.post('/api/addrecipe', RecipeController.addRecipe);

// Remove a recipe detail
app.post('/api/removerecipe', RecipeController.removeRecipe);

// Update a recipe detail
app.post('/api/updaterecipe/:id', RecipeController.updateRecipe);

app.get('/*', function(req, res) { 
    res.sendFile(path.join(__dirname ,'/build/index.html')); 
});
// Setting Port number
app.listen(8001, ()=>{
    console.log("Server is running in Port 8001")
})

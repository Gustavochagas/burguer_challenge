var ingredients = require('./ingredients.json');
var menu = require('./menu.json');

var express = require('express');
app = express(),
    port = process.env.PORT || 8080;

app.listen(port);

app.get('/getIngredients', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json(ingredients);
})

app.get('/getLanches', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json(menu);
})

console.log('Message: RESTful API server started on: ' + port);
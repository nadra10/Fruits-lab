const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine')






const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
const vegetables = require('./models/vegetables.js');

app.set('view engine', 'jsx');
// app.engine('jsx', require('jsx-view-engine').createEngine());
app.engine('jsx', jsxEngine())


app.get('/fruits/', function(req, res){
    res.render('fruits/Index', { fruits: fruits });
});

//add show route
app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('fruits/Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});  



app.get('/vegetables/', function(req, res){
    res.render('vegetables/Index', { vegetables: vegetables });
});

//add show route
app.get('/vegetables/:indexOfVegetablesArray', function(req, res){
    res.render('vegetables/Show', { //second param must be an object
        vegetable: vegetables[req.params.indexOfVegetablesArray] //there will be a variable available inside the ejs file called vegetable, its value is vegetables[req.params.indexOfVegetablesArray]
    });
});  





app.listen(3000,() => {
    console.log('listening');
});
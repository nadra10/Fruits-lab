const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine')






const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
const vegetables = require('./models/vegetables.js');

app.set('view engine', 'jsx');
// app.engine('jsx', require('jsx-view-engine').createEngine());
app.engine('jsx', jsxEngine())


//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));



app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


//put this above your Show route
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});



app.get('/fruits/', function(req, res){
    res.render('fruits/Index', { fruits: fruits });
});



app.post('/fruits', (req, res)=>{
    console.log(req.body);
    res.send('data received');
});



app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    // res.send('data received');
    res.redirect('/fruits'); //send the user back to /fruits
});



//add show route
app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('fruits/Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});  




//vegetables Route







app.get('/vegetables/', function(req, res){
    res.render('vegetables/Index', { vegetables: vegetables });
});


app.post('/vegetables', (req, res)=>{
    console.log(req.body);
    res.send('data received');
});


app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    vegetables.push(req.body);
    console.log(vegetables);
    // res.send('data received');
    res.redirect('/vegetables'); //send the user back to /vegetables
});


//put this above your Show route
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
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
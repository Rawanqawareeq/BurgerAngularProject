const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app=express();
const burger=require('./data/burger.json');
const menu=require('./data/menu.json');

app.use(cors());
app.use([bodyParser.urlencoded({ extended: true, limit: '100mb' }), express.json()]);

app.get('/menu',(req,res)=>{
    res.json(menu);
});

app.get('/ingredients',(req,res)=>{
    res.json(burger);
});

app.post('/order',(req,res)=>{
    console.log(req.body);
    res.json(req.body);
});

app.listen(4000,(error)=> {
    if(!error)
        console.log('listening on 4000...');
    else
        console.log("Error Occurred");
});
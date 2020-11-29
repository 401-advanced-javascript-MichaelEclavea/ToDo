const express = require('express');
const app = express();


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = ''





app.get('/', function(req, res){
    console.log('home route');
})


app.listen(3000, ()=>{
    console.log('server is listening on server 3000');
})
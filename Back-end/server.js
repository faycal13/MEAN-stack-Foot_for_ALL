//Import dependencies
const Express = require('express');
const BodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const Port = 3000;
const auth = require('./routes/auth');
const app = Express();

//Enable bodyParser
app.use(BodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', auth);
//Enable CORS
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type, Accept, Authorization');
    next();
});

app.get('/', function(req, res) {
  res.send('hello');
});

app.listen(Port,function() {
  console.log('server tourne en localhost: ' + Port);
});

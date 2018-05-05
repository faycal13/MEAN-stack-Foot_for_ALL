//Import dependencies
const Express = require('express');
const BodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const Port = 3000;
const auth = require('./routes/auth');
const app = Express();


app.use(BodyParser.json());
app.use('/', auth);
app.get('/', function(req, res) {
  res.send('hello');
});

app.listen(Port,function() {
  console.log('server tourne en localhost: ' + Port);
});

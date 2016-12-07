const express = require('express');
const app = express();
const PORT = 3005;
const routes = require('./notes_app.js');
const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json() );

app.get('/', function(req, res){
  res.send("test");
});

app.get('/notes_app', routes.getAll);




  app.listen(PORT, function(){
  console.log('app listening on port '+PORT);
});

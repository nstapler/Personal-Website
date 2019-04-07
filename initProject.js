var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'template'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

'use strict';

const Port = 8080;
const HOST = '0.0.0.0';


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 8080);

app.use(express.static("public"));

app.get('/',function(req,res,next){
  var context = {};
  res.render('home',context);
});
app.get('/home',function(req,res,next){
  var context = {};
  res.render('home',context);
});
app.get('/contact',function(req,res,next){
  var context = {};
  res.render('contactMe',context);
});
app.get('/projects',function(req,res,next){
  var context = {};
  res.render('projects',context);
});
app.get('/draw',function(req,res,next){
  var context = {};
  res.render('draw',context);
});
app.get('/who',function(req,res,next){
  var context = {};
  res.render('who',context);
});

//took these functions from the lectures
app.use(function(req,res){
  res.status(404);
  res.render('404');
  //could not find the requested page
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
  //there was some server error
});
/*
app.listen(app.get('port'), function(){
  console.log('Express started on http://...:' + app.get('port') + '; press Ctrl-C to terminate.');
});
*/
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

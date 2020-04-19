// Express toevoegen aan Node.js
const express = require('express');
const app = express();

// bibliotheek inladen om paden naar folder te maken
const path = require('path');

// applicatiepoort instellen
const port = 5000;

// EJS configureren
app.set("view engine", "ejs");
app.set("views",  path.resolve(__dirname, "views"));

//databestand inladen (checken in andere oefening , onduidelijk)

// route naar "homepagina" laten werken
app.get('/', function(req,res){
  res.render('home',{
    post: overzicht1posts.werken
  });
});

// route naar "contactpagina"
app.get('/contact', function(req, res){
  res.render('contact');
});

const overzicht1posts = require('./data/museum.json');

// route naar "overzicht" laten werken
app.get('/overzicht', function(req,res){
  res.render('overzicht', {
    // Array van werken doorgeven aan de renderfunctie om op de overzichtspagina te tonen. CODE BEKIJKEN!!
    posts: overzicht1posts.werken
  });
});

// detailpagina van een werk
app.get('/overzicht1/:postid', function(req,res){
  res.render('detail', {
    post: overzicht1posts.werken[req.params.postid]
  });
});

//om CSS te linken
app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));

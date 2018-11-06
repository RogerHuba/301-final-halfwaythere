'use strict'

//PROXY SERVER - API server

// Application Dependencies
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
const pg = require('pg');

// app setup
const PORT = process.env.PORT || 3000;
const app = express();
require('dotenv').config();
app.set('view engine','ejs');
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))

// psql db
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('err', err => console.log(err));


app.listen(PORT, ()=>{console.log(`app is running on ${PORT}`)});


// API Routes
app.get('/', getHome);

app.post('/location',findHalfwayPoint);

app.post('/address', grabCurrentAddress);


////////////////////////////////////////////////////////////////////////////////////////////
// error handlers

function handleError (err, res) {
  console.error('**',err, '**');
  // res.redirect('/error');
}

// render error page
// function renderError(req,res){
//   res.render('./pages/error');
// }


////////////////////////////////////////////////////////////////////////////////////////////


function getData(request, response) {
  let SQL = 'SELECT * from locations;';
  return client.query(SQL)
    .then(results =>
      response.render('index', {results: results.rows}))
    .catch(handleError);
}


function handleError (err, res) {
  console.error('********',err, '#########');
  // res.redirect('/error');
}


function getHome(req, res){
  res.render('index');
}

function grabCurrentAddress(req, res){
  const URL= `https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.body.latitude},${req.body.longitude}&key=${process.env.GEOCODE_API_KEY}`;
  return superagent.get(URL)
  .then(address =>{
    res.send(address.body.results[0].formatted_address);
  })
  .catch(handleError)
}

function findHalfwayPoint(req, res){
  // console.log(req.body);
  const URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${req.body.addressOne}&destination=${req.body.addressTwo}&key=${process.env.GEODIRECTIONS_API_KEY}`
  return superagent.get(URL)
  .then(results =>{
    let midLat = ((results.body.routes[0].legs[0].start_location.lat + results.body.routes[0].legs[0].end_location.lat)/2);
    let midLng = ((results.body.routes[0].legs[0].start_location.lng + results.body.routes[0].legs[0].end_location.lng)/2);
    console.log(midLat);
    console.log(midLng);
    console.log(req.body.venue);
    getyYelp(midLat,midLng,req.body.venue);
    
  })
}


function getYelp(lat,long, venue){
  const URL =``

}


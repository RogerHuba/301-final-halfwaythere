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

// middleware
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

function handleError (err, res) {res
  console.error('**',err, '**');
  // res.redirect('/error');
}

// render error page
// function renderError(req,res){
//   res.render('./pages/error');
// }


////////////////////////////////////////////////////////////////////////////////////////////

function Location(data){
  this.name = data.name ? data.name : 'No data Found';
  this.isClosed = data.is_closed ? data.is_closed : 'No data Found';
  this.img_url = data.img_url ? data.img_url : 'No data Found';
  this.yelp_url = data.yelp_url ? data.yelp_url : 'No data Found'; 
  this.info = data.categories[0].title ? data.categories[0].title : 'No data Found';
  this.rating = data.rating ? data.rating : 'No data Found';
  this.price = data.price ? data.price : 'No data Found';
  this.address = data.location.display_address ? data.location.display_address : 'No data Found';
  this.phone = data.phone ? data.phone : 'No data Found';
  
}

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
  const URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${req.body.addressOne}&destination=${req.body.addressTwo}&key=${process.env.GEODIRECTIONS_API_KEY}`
  return superagent.get(URL)
    .then(results =>{
      let midLat = ((results.body.routes[0].legs[0].start_location.lat + results.body.routes[0].legs[0].end_location.lat)/2);
      let midLng = ((results.body.routes[0].legs[0].start_location.lng + results.body.routes[0].legs[0].end_location.lng)/2);
   
      let data ={
        lat: midLat,
        lng: midLng,
        venue: req.body.venue
      }
      getYelp(data, req, res);
    })
}

function getYelp(data,req,res){
  const URL =`https://api.yelp.com/v3/businesses/search?term=${data.venue}&latitude=${data.lat}&longitude=${data.lng}`
  return superagent.get(URL)
  .set({'Authorization' : `Bearer ${process.env.YELP_API_KEY}`})
  .then(results =>{
  let locationArr = [];
    results.body.businesses.forEach(location =>{
      locationArr.push(new Location(location));
    })
    res.render('locations', {locations: locationArr});
  })
  .catch(handleError);
}

function save(req, res){
  let SQL = `
  INSERT INTO table-name-here
  (values, go, here)
  VALUES($1,$2,$3)`;
  let value = Object.values(req.body);
  client.query(SQL,value);
  res.redirect('to whatever page we are on');
}


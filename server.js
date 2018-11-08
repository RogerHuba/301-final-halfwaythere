'use strict'

//PROXY SERVER - API server

// Application Dependencies
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
const pg = require('pg');
const methodoverride = require('method-override');


// app setup
const PORT = process.env.PORT || 3000;
const app = express();
require('dotenv').config();
app.set('view engine','ejs');

// middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(methodoverride((req, res) => {
  if(typeof(req.body) === 'object' && '_method' in req.body){
    let method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// psql db
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('err', err => console.log(err));


app.listen(PORT, ()=>{console.log(`app is running on ${PORT}`)});


// API Routes
app.get('/', getHome);

app.post('/location',findHalfwayPoint);

app.post('/address', grabCurrentAddress);

app.post('/history', createHistory);

app.get('/history', getData);

app.delete('/history/:id', deleteHistory)

function testRoute (request,response) {
  console.log('here');
}

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
  // this.isClosed = data.hours[x].is_open_now ? data.is_closed : 'No Data Found';
  this.img_url = data.image_url ? data.image_url : 'No data Found';
  this.yelp_url = data.url ? data.url : 'No data Found';
  this.info = data.categories[0].title ? data.categories[0].title : 'No data Found';
  this.rating = data.rating ? data.rating : 'No data Found';
  this.price = data.price ? data.price : 'No data Found';
  this.address = data.location.display_address ? data.location.display_address : 'No data Found';
  this.phone = data.phone ? data.phone : 'No data Found';
  this.lat = data.coordinates.latitude;
  this.lng = data.coordinates.longitude;

  this.id = data.name.replace(/\s/g, '');

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

      // console.log(`midLat = ${midLat}`);
      // console.log(`midLng = ${midLng}`);

      let data ={
        lat: midLat,
        lng: midLng,
        venue: req.body.venue,
        lat1: results.body.routes[0].legs[0].start_location.lat,
        lng1: results.body.routes[0].legs[0].start_location.lng,
        lat2: results.body.routes[0].legs[0].end_location.lat,
        lng2: results.body.routes[0].legs[0].end_location.lng,
        imgSrc: `https://maps.googleapis.com/maps/api/staticmap?center=${midLat},${midLng}&zoom=10&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${results.body.routes[0].legs[0].start_location.lat},${results.body.routes[0].legs[0].start_location.lng}&markers=color:green%7Clabel:G%7C${results.body.routes[0].legs[0].end_location.lat},${results.body.routes[0].legs[0].end_location.lng}&markers=color:red%7Clabel:C%7C${midLat},${midLng}&key=${process.env.MAP_API_KEY}`

      }
      getYelp(data, req, res);
    }).catch(handleError);
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
      let imgSrc ={
        imgSrc: `https://maps.googleapis.com/maps/api/staticmap?center=${data.midLat},${data.midLng}&zoom=auto&size=450x600&maptype=roadmap&markers=color:blue%7Clabel:S%7C${data.lat1},${data.lng1}&markers=color:green%7Clabel:G%7C${data.lat2},${data.lng2}&markers=color:red%7Clabel:C%7C`,
        imgKey: `&key=${process.env.MAP_API_KEY}`
      }
      res.render('locations', {locations: locationArr, coords: imgSrc});
    // console.log(locationArr);
    })

      res.render('locations', {locations: locationArr});
      console.log(locationArr);
    })

    let imgSrc ={
      imgSrc: `https://maps.googleapis.com/maps/api/staticmap?center=${data.midLat},${data.midLng}&zoom=auto&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${data.lat1},${data.lng1}&markers=color:green%7Clabel:G%7C${data.lat2},${data.lng2}&markers=color:red%7Clabel:C%7C`,
      imgKey: `&key=${process.env.MAP_API_KEY}`
    }
    res.render('locations', {locations: locationArr, coords: imgSrc});
    // console.log(locationArr);
  })
  .catch(handleError);

}



function createHistory(request, response) {
  let {name, image_url, yelp_url, info, rating, price, address, phone} = request.body;
  console.log(request.body);
  let SQL = 'INSERT INTO yelp (name, image_url, yelp_url, info, rating, price, address, phone) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id;';
  let value = [name, image_url, yelp_url, info, rating, price, address, phone];
  console.log(SQL, value);
  client.query(SQL, value)
    .then(result => response.redirect('/'))
    .catch(error => handleError({errorMessage: error}, response));
}


function getData(request, response) {
  let SQL = 'SELECT * FROM yelp;';
  return client.query(SQL)
    .then(results =>
      response.render('history', {results: results.rows}))
    .catch(handleError);
}

function deleteHistory(request, response) {
  console.log(request.body);
  let SQL = `DELETE FROM yelp where id=${request.body.id};`
  client.query(SQL)
    .then(result => response.redirect('/history'))
    .catch(error => handleError({errorMessage: error}, response));
}

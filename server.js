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


function findHalfwayPoint(req, res){
  console.log(req.body);
  
  res.render('index');
  // let addressOne = $('#addressOne').val()
  // let addressTwo = $('addressTwo').val()
  // console.log(`addy 1 ${addressOne} and addy 2 ${addressTwo}`);
}

function addCurrentAddress(req,res){
  // console.log(req.body);
  // geolocation.getCurrentPosition(grabCurrentAddress);
  // console.log(geolocation.getCurrentPosition());

  // console.log('heeere',geolocation);
//   if (geolocation) {
//     geolocation.getCurrentPosition(grabCurrentAddress);
//  } else { 
//      x.innerHTML = "Geolocation is not supported by this browser.";
//  }
}



function grabCurrentAddress(req, res){
  // console.log('&&&&&&');
  // console.log(req.body);


  const URL= `https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.body.latitude},${req.body.longitude}&key=${process.env.GEOCODE_API_KEY}`;
  return superagent.get(URL)
  .then(address =>{
    res.send(address.body.results[0].formatted_address);
    // res.render('index');
  })
  .catch(handleError)
}
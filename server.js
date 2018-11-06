'use strict'

//PROXY SERVER - API server

const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
var geolocation = require('geolocation');

const pg = require('pg');

require('dotenv').config();

const PORT = process.env.PORT;
const client = new pg.Client(process.env.DATABASE_URL);

client.connect();
client.on('err', err => console.log(err));
const app = express();

app.use(express.urlencoded({extended:true}))

// error handlers
app.get('/error', (req,res) =>{
  // console.log(req.query.e);
  res.render('pages/error', {error: req.query.e});
});

// geolocation.getCurrentPosition(function (err, position) {
//   if (err) throw err
//   console.log(position)
// })

app.set('view engine','ejs');
app.use(cors());
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`)
});
app.use(express.static('public'));
app.get('/', getHome);



app.post('/location',findHalfwayPoint);

app.post('/address', addCurrentAddress);

// $('findBtn').on('click', findHalfwayPoint);

// let addressOne = $('#addressOne').val()
// let addressTwo = $('addressTwo').val()

// function testPage(request, response){
//   response.render('index');
// }

function getData(request, response) {
  let SQL = 'SELECT * from locations;';
  return client.query(SQL)
    .then(results =>
      response.render('index', {results: results.rows}))
    .catch(handleError);
}


function handleError(request, response) {
  response.redirect('/error');
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

function addCurrentAddress(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(grabCurrentAddress);
 } else { 
     x.innerHTML = "Geolocation is not supported by this browser.";
 }
}



function grabCurrentAddress(position){
  position.coords.latitude
  const URL= `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.GEOCODE_API_KEY}`
  return superagent.get(URL)
  .then(address =>{
    console.log(address)
    res.render('index');
  })
}
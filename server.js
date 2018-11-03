'use strict'

//PROXY SERVER - API server

const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

const pg = require('pg');

require('dotenv').config();

const PORT = process.env.PORT;
const client = new pg.Client(process.env.DATABASE_URL);

client.connect();
client.on('err', err => console.log(err));
const app = express();

app.set('view engine','ejs');
app.use(cors());
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`)
});
app.use(express.static('public'));
app.get('/', getData);

app.get('/error', (req,res) =>{
  // console.log(req.query.e);
  res.render('pages/error', {error: req.query.e});
});

// function testPage(request, response){
//   response.render('index');
// }

function getData(request, response) {
  let SQL = 'SELECT * from locations;';
  return client.query(SQL)
    .then(results =>
      // console.log(results.rows))
      response.render('index', {results: results.rows}))
    .catch(handleError);
}


function handleError(request, response) {
  response.redirect('/error');
}

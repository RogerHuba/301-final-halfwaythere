'use strict'

$('#selectLocation').on('click', saveYelpData);
$('#currentLocationBtn').on('click', getCoords);

function getCoords(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(grabCurrentAddress);
 } else { 
     x.innerHTML = "Geolocation is not supported by this browser.";
 }
}

function grabCurrentAddress(position){
    // console.log('hi');
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
    $.post( "/address", { latitude: position.coords.latitude, longitude: position.coords.longitude } )
    .then(result =>{
        $('#addressOne').val(result);
    })
}

function grabCurrentAddress(position){
    // console.log('hi');
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
    $.post( "/address", { latitude: position.coords.latitude, longitude: position.coords.longitude } )
    .then(result =>{
        $('#addressOne').val(result);
    })
}

function saveYelpData(event, req, res) {
    event.preventDefault();
}
'use strict'

$('#currentLocationBtn').on('click', getCoords);

function getCoords(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(grabCurrentAddress);
 } else { 
     x.innerHTML = "Geolocation is not supported by this browser.";
 }
}

function grabCurrentAddress(position){
    // $('#addressOne').val(navigator.geolocation.getCurrentPosition());
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    $.post( "/address", { latitude: position.coords.latitude, longitude: position.coords.longitude } );
    
}



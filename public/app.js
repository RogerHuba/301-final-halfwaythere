'use strict'

var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn")




// $('#selectLocation').on('click', saveYelpData);
$('#currentLocationBtn').on('click', getCoords);


function getCoords(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(grabCurrentAddress);
 } else { 
     x.innerHTML = "Geolocation is not supported by this browser.";
 }
}

function grabCurrentAddress(position){
    $.post( "/address", { latitude: position.coords.latitude, longitude: position.coords.longitude } )
    .then(result =>{
        $('#addressOne').val(result);
    })
}

function grabCurrentAddress(position){
    $.post( "/address", { latitude: position.coords.latitude, longitude: position.coords.longitude } )
    .then(result =>{
        $('#addressOne').val(result);
    })
}


// function saveYelpData(event, req, res) {
//     event.preventDefault();
// }


// nav slide
$(document).ready(function(){

    $(".hamburger-nav").on("click", function(){

        // $(".menu").fadeToggle("slow").toggleClass("menu-hide");
        $(".menu").animate({
          height: 'toggle'
        });

    });

});


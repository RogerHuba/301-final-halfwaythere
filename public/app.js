'use strict'

var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn")
$(document).ready(function(){
    $('#topNav').css('height', '48px')
})



// $('#selectLocation').on('click', saveYelpData);
$('#currentLocationBtn').on('click', getCoords);
// $('#hamMenu').on('click', toggleMenu);

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
    // console.log('hi');
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
    $.post( "/address", { latitude: position.coords.latitude, longitude: position.coords.longitude } )
    .then(result =>{
        $('#addressOne').val(result);
    })
}


// function saveYelpData(event, req, res) {
//     event.preventDefault();
// }


//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "50px";
for (let i = 0; i < menu.length; i++){
    menu[i].style.marginTop="100px";
};

close.addEventListener("click", function() {
  var menuIcon = close.children;
  for (let i = 0; i < menuIcon.length; i++) {
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
	//to close
	if (nav.style.height <= "275px") {
	nav.style.height = "50px";
	main.style.marginTop = "1px";
	let i = 0;
    for (let i = 0; i < menu.length; i++) {
	    menu[i].style.opacity="0.0";
	    menu[i].style.marginTop="100px";
	    };
	} 
	//to open
	else if (nav.style.height <= "50px") {
        nav.style.height = "275px";
        main.style.marginTop = "200px";
        let i = 0;
        for (let i = 0; i < menu.length; i++) {
            menu[i].style.opacity="1.0";
            menu[i].style.marginTop="0px";
	    };
	}
};



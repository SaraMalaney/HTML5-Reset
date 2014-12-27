// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }
//
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
		initialize()
		// your functions go here
	
	});
	
	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);

 function initialize() {
	var mapOptions = {
	  center: { lat: -34.397, lng: 150.644},
	  zoom: 8
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
	    mapOptions);
}

function getDirectionsMap(){
	var x = document.getElementById("orig-dest");
	var iframe = document.createElement('iframe');
	iframe.width= '400px';
	iframe.height= '400px';
    iframe.src = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyBDezljMuJwKTS4kGOC8_V3Br9ME1tb-5Y&origin=' + x.elements[0].value + '&destination='+x.elements[1].value;
    document.body.appendChild(iframe);
}
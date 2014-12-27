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
		//initialize()
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
    document.getElementById("container-left").appendChild(iframe);


    // Request the JSON and process it
  /*  $.ajax({
        type:'GET',
        url:"https://www.maps.googleapis.com/maps/api/directions/json",
        data:"origin=Toronto&destination=Montreal&key=AIzaSyBDezljMuJwKTS4kGOC8_V3Br9ME1tb-5Y",
        success:function(feed) {
        	alert("yes!");
 
            // Loop through the items
            //for(var i=0, l=feed.items.length; i < l && i < 16;   i) 
            //{
               
            //}
 
            // Display the thumbnails on the page
            //$('#feed').html(thumbs.join(''));

        },
        dataType:'json'
    });
*/
    $.ajax({
		type: 'GET',
		url: 'https://www.maps.googleapis.com/maps/api/directions/json',
		contentType: "text/plain",

	  xhrFields: {
	    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
	    // This can be used to set the 'withCredentials' property.
	    // Set the value to 'true' if you'd like to pass cookies to the server.
	    // If this is enabled, your server must respond with the header
	    // 'Access-Control-Allow-Credentials: true'.
	    withCredentials: false
	  },

	  headers: {
	    // Set any custom headers here.
	    // If you set any non-simple headers, your server must include these
	    // headers in the 'Access-Control-Allow-Headers' response header.
	  },

	  success: function() {
	    // Here's where you handle a successful response.
	    alert("yes!");
	  },

	  error: function() {
	    // Here's where you handle an error response.
	    // Note that if the error was due to a CORS issue,
	    // this function will still fire, but there won't be any additional
	    // information about the error.
	  }
	});
}
//map options
var options = {
  	center: {
    	lat: 40.64,
   		lng: -73.76
 	},
	  zoom: 10
},
element = document.getElementbyId('map-canvas'),
map = new google.maps.Map(element,options);
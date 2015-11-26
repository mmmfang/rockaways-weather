// //map options
// var options = {
//   	center: {
//     	lat: 40.64,
//    		lng: -73.76
//  	},
// 	  zoom: 10
// },
// element = document.getElementbyId('map-canvas'),
// map = new google.maps.Map(element,options);

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
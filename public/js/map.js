var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 40.64, lng: -73.76},
    zoom: 8
  });
}
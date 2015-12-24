var map;
var latitudeFromClick, longitudeFromClick;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 5,
    center: {lat: 40, lng: -79 }
  });

  map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });
}

function placeMarkerAndPanTo(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  map.panTo(latLng);
  
  $scope.latitudeFromClick = latLng.lat(); 
  $scope.longitudeFromClick=latLng.lng();

  alert($scope.latitudeFromClick);
  alert($scope.longitudeFromClick);
}


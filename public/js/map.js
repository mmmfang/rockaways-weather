var map;

function initMap() {

  var myLatLng = {lat: 40.64, lng: -73.76};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
  });


  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

}


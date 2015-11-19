var app = angular.module('marineWeather', ['ngRoute']);

app.controller('weatherController', ['$http', function($http) {
  var controller = this;
  	controller.makeAPIcall= function(){
      	var promise = $http.get('https://data.police.uk/api/outcomes-at-location?date=2013-01&poly=52.268,0.543:52.794,0.238:52.130,0.478');
    	promise.success(function(data) {
      		controller.forecasts = data;

    	})
   	} 
}]);
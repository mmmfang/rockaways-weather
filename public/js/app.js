var app = angular.module('marineWeatherApp', []);

app.controller('WeatherController', ['$http', function($http) {
  var controller = this;
    $http.get('https://api.worldweatheronline.com/free/v2/marine.ashx?key=WEATHER_KEY&format=json&q=40.64,-73.76')
    	.success(function(data) {
      		controller.data = data; //returns whole shebang
      		controller.dataNest= data.data; //returns one object of 3 arrays- nearest area, request and weather 
      		controller.weatherObject = data.data.weather; //returns singular weather with all properties inside
      		console.log(controller.weatherObject);
      		controller.oneForecast = data.data.weather[0];
      		console.log(controller.oneForecast);
    	}).error (function() {
    		console.log("API not gotten");
    	})
}]);
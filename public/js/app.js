var app = angular.module('marineWeatherApp', []);

app.controller('WeatherController', ['$http', function($http) {
  var controller = this;
    $http.get('/weather')
    	.success(function(data) {
      		controller.data = data; //returns whole shebang
      		controller.dataNest= data.data; //returns one object of 3 arrays- nearest area, request and weather 
      		controller.weatherObject = data.data.weather; //returns singular weather with all properties inside
      		controller.oneForecast = data.data.weather[0];
      		console.log(controller.oneForecast);
    	}).error (function() {
    		console.log("API not gotten");
    	})
}]);

app.controller('homepageController', function($scope) {
    $scope.pageClass = 'page-home';
});

//app.controller('MapController', [$http, function($http){

//}])


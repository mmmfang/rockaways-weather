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

app.controller('LocaleController', ['$http', '$scope', function($http, $scope){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;

    // Set initial coordinates to the Rockaways
    $scope.formData.latitude = 40;
    $scope.formData.longitude = -79;

    // Functions
    // ----------------------------------------------------------------------------
    // Creates a new user based on the form fields
    $scope.createLocale = function() {

        //Grabs all of the text box fields
        var localeData = {
            locale: $scope.formData.locale,
            latitude: $scope.formData.latitude,
            longitude: $scope.formData.longitude
        };

        // var localeData = {
        //     locale: $scope.formData.locale,
        //     latitude: latitudeFromClick,
        //     longitude: longitudeFromClick
        // };

        // Saves the user data to the db
        $http.post('/locales', localeData)
            .success(function (data) {

                // Once complete, clear the form
                $scope.formData.locale = "";
                
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

}])


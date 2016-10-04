'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('MainCtrl', ['$scope', 'weatherService', '$http', function ($scope, weatherService, $http) {
    $scope.cities = '';
    $scope.citiData = [];

    $scope.getWeatherData = function (name) {
      weatherService.getweatherApi(name).success(function (response) {
        $scope.cities = response;
        var a = {};
        a.langitude = $scope.cities.coord.lon;
        a.lattitude = $scope.cities.coord.lat;
        a.weatherDescription = $scope.cities.weather;
        for (var i = 0; i <= a.weatherDescription; i++) {
          a.description = a.weatherDescription[i].description;
          console.log('a.description',a.description)
        }
        $scope.citiData.push(a);
        if (localStorage.hasOwnProperty('test')) {
          $scope.citieNames = localStorage.getItem("test");
        } else {
          $scope.citieNames = localStorage.setItem("test", JSON.stringify($scope.citiData));
        }
        console.log('$scope.cities', $scope.cities)
      }).error(function (error) {
        console.log('error', error);
      });
    };

    $scope.points = [
      { "name": "Canberra", "latitude": -35.282614, "longitude": 149.127775 },
      { "name": "Melbourne", "latitude": -37.815482, "longitude": 144.983460 },
      { "name": "Sydney", "latitude": -33.869614, "longitude": 151.187451 },
      { "name": "India", "latitude": 20.5937, "longitude": 78.9629 }
    ];



  }]);

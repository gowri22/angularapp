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
    $scope.weatherDescs = [];

    $scope.getWeatherData = function (name) {
      weatherService.getweatherApi(name).success(function (response) {
        $scope.cities = response;

        console.log('$scope.cities',$scope.cities)
          var tempobj = {};
          tempobj.lattitude = $scope.cities.coord.lat;
          tempobj.langitude = $scope.cities.coord.lon;
          tempobj.name = $scope.cities.name;
          var weather = $scope.cities.weather;
          tempobj.country = $scope.cities.sys.country;
        for (var i=0; i<weather.length; i++){
            tempobj.description = weather[i].description;
            tempobj.climateReport = weather[i].main;
            }
            $scope.citiData.push(tempobj);

              if (!localStorage.hasOwnProperty('weatherReport')) {
          $scope.points = localStorage.setItem("weatherReport", JSON.stringify($scope.citiData));;
    
                     } else{
                        $scope.newObj = JSON.parse(localStorage.getItem('weatherReport'));
                     }
        
            
      

      }).error(function (error) {
        console.log('error', error);
      });
    };

  }]);

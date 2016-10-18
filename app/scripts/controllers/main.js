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
    $scope.citiData = [];
   $scope.getLocation = function(val) {
    return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
      return item.formatted_address;
      });
    });
   }

    $scope.getWeatherData = function (name) {
      weatherService.getweatherApi(name).success(function (response) {
        $scope.cities = response;
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
                $scope.citiData = localStorage.setItem("weatherReport", JSON.stringify($scope.citiData));
                 $scope.citiData = JSON.parse(localStorage.getItem('weatherReport'));
                     } else{
                        $scope.citiData = localStorage.setItem("weatherReport", JSON.stringify($scope.citiData));
                     }
                     $scope.citiData = JSON.parse(localStorage.getItem('weatherReport'));
      
          }).error(function (error) {
        console.log('error', error);
      });
    };
    

  }])

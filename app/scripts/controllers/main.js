'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('MainCtrl', ['$scope','weatherService','$http', function ($scope, weatherService, $http) {

  $scope.getWeatherData = function (name) {
        weatherService.getweatherApi(name).success(function (response) {
          $scope.cities = response;
          console.log('$scope.cities',$scope.cities)
        }).error(function (error) {
           console.log('error',error);
        });
  };
  if(localStorage.hasOwnProperty('$scope.cities')){
  $scope.getCities =  localStorage.getItem($scope.cities);
  console.log('$scope.getCities')
  }else{
   $scope.getCities = localStorage.setItem('$scope.cities', JSON.stringify($scope.cities));
  }
  $scope.points = [
        { "name": "Canberra", "latitude": -35.282614, "longitude": 149.127775 },
        { "name": "Melbourne", "latitude": -37.815482, "longitude": 144.983460 },
        { "name": "Sydney", "latitude": -33.869614, "longitude": 151.187451 },
        { "name": "India", "latitude": 20.5937, "longitude": 78.9629 }
    ];

  }]);

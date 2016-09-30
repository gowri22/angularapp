'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('MainCtrl', ['$scope','weatherService','$http',function ($scope, weatherService, $http) {
   
   $scope.getWeatherData = function(){
    var cat = weatherService.getweatherApi();
      cat.then(function(data) {
          $scope.categories = data.data;
          console.log(' $scope.categories', $scope.categories)
      })

    }

  }]);

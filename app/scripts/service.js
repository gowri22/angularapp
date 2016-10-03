angular.module('angularappApp').factory('weatherService', ['$http', '$rootScope', function ($http, $rootScope) {

  var service = {};
  var base_url = 'http://api.openweathermap.org';
  //id =  c46b536c57f49065c4e4825b136f8614;

    service.getweatherApi = function (name) {
    return $http.get(base_url + '/data/2.5/weather?q='+name+'&appid=c46b536c57f49065c4e4825b136f8614')
   
  };
return service;
}]);
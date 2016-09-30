angular.module('angularappApp').factory('weatherService', ['$http', '$rootScope', function ($http, $rootScope) {

  var service = {};
  var base_url = 'http://api.openweathermap.org';
  //id =  c46b536c57f49065c4e4825b136f8614;

    service.getweatherApi = function () {
    return $http.get(base_url + '/data/2.5/weather?q=London,uk'+'&appid=c46b536c57f49065c4e4825b136f8614').then(function(data){
        return data;
        //console.log('data',data)
    })
  };
return service;

}]);

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c46b536c57f49065c4e4825b136f8614

//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=c46b536c57f49065c4e4825b136f8614
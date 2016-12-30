angular.module('easyismath')
  .factory('userdata', ['$http', '$rootScope', function($http, $rootScope) {
    var getData = function(clientID){
      $http.post('api/data', {id: clientID})
        .then(function(res) {
          $rootScope.userStuff = res.data;
        })
    }
    return {
      getData: getData
    }
  }])
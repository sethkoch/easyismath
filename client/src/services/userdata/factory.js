angular.module('easyismath')
  .factory('userdata', ['$http', function($http) {
    var getData = function(clientID){
      $http.post('api/data', {id: clientID})
        .then(function(res) {
          console.log(res.data)
        })
    }
    return {
      getData: getData
    }
  }])
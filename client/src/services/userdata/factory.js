angular.module('easyismath')
  .factory('userdata', ['$http', '$rootScope', '$window', function($http, $rootScope, $window) {
    var getData = function(clientID){
      if ($rootScope.isAuthenticated) {
      $http.post('api/data', {id: clientID})
        .then(function(res) {
          $rootScope.userStuff = res.data;
          $window.localStorage.setItem('userProfile', JSON.stringify(res.data));

        })
      }
    }
    return {
      getData: getData
    }
  }])
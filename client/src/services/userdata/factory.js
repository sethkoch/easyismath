(function() {

  angular.module('easyismath')
    .factory('userdata', ['$http', '$rootScope', '$window', function($http, $rootScope, $window) {
      var getData = function(clientID) {
        $http.post('api/data', {id: clientID})
          .then(function(res) {
            $rootScope.userStuff = res.data;
            //the conditional stops the writing to local storage if user is not authenticated
            if ($rootScope.isAuthenticated) {
              $window.localStorage.setItem('userProfile', JSON.stringify(res.data));
            }
          });
      };

      return {
        getData: getData
      };

    }]);

})();

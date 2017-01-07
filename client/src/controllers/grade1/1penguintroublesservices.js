(function(){
angular.module('easyismath')
  .factory('oneone', ['$http', function($http) {

    return {
      getData : getData
    }

    function getData() {
      return $http.post('/api/gradeonemissionone', {})
        .then(getDataComplete)
        .catch(getDataFailed);

      function getDataComplete(res) {
        return res.data
      }

      function getDataFailed(err) {
        console.log(err);
      }
    }





  }])
})();
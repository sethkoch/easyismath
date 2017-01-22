(function(){
angular.module('easyismath')
  .factory('oneone', ['$http', '$state', '$rootScope', '$sce', '$window', function($http, $state, $rootScope, $sce, $window) {

    return {
      getData : getData,
      rewardMedal: rewardMedal
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

    function rewardMedal(user, medal, level, points) {
      $window.localStorage.reward = "Pete";
      $window.localStorage.rewardImage = "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1rewardpetebear.png' class='img-responsive' style='max-height:460px' />";
      $http.post('/api/rewardmedal', {userid:user , medal:medal, level: level, points: points })
        .then(function(res) {
          setTimeout(function() {
            $state.go('reward');
          }, 2500)

        })
    }





  }])
})();
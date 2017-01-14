angular.module('easyismath')
  .controller('RewardController', ['$window', '$sce', '$state', function($window, $sce, $state) {
    var vm = this;
    vm.rewardImage = $sce.trustAsHtml($window.localStorage.rewardImage);
    vm.rewardName = $window.localStorage.reward;
    setTimeout(function() {
      $state.go('home');
    }, 3000);
  }])
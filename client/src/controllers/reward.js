angular.module('easyismath')
  .controller('RewardController', ['$window', '$sce', '$state', function($window, $sce, $state) {
    var vm = this;
    vm.rewardImage = $sce.trustAsHtml($window.sessionStorage.rewardImage);
    vm.rewardName = $window.sessionStorage.reward;
    setTimeout(function() {
      $state.go('home');
    }, 3000);
  }])
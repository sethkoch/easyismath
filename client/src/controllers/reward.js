angular.module('easyismath')
  .controller('RewardController', ['$window', '$sce',  function($window, $sce) {
    var vm = this;
    vm.rewardImage = $sce.trustAsHtml($window.localStorage.rewardImage);
    vm.rewardName = $window.localStorage.reward;
  }])
(function() {

  angular.module('easyismath')
    .controller('LisaAndJumboPlayController', ['$rootScope', 'onefour', '$sce', '$scope', '$window', '$state', 'tools', function($rootScope, onefour, $sce, $scope, $window, $state, tools) {
      //to lock up
      if (!$rootScope.isAuthenticated) {
        $state.go('home');
      }
      //makes sure level 1 has been completed, if not go to home
      if (JSON.parse($window.localStorage.userProfile).medals.indexOf('Lisa') === -1) {
        $state.go('home');
      }
      //makes sure this leve has not already been completed - if it has, then they will have Lisa
      if (JSON.parse($window.localStorage.userProfile).medals.indexOf('Sarah') !== -1) {
        $state.go('home');
      }

      var vm = this;
      vm.hardData;
      vm.characters;
      vm.image;
      vm.image2;
      vm.text;
      vm.button;
      vm.clicked1 = onefour.firstClick;
      vm.clicked2 = onefour.nextClick;
      vm.counter = 1;
      vm.problems = false;
      vm.answer;
      vm.correctAnswer;
      vm.score = 0;
      vm.doubleImage = true;
      //pulls data - from here - saves all data into the variable hardData
      activate();

      function activate() {
        return getData().then(function() {
          vm.image = $sce.trustAsHtml(vm.hardData.characters[1]);
          vm.image2 = $sce.trustAsHtml(vm.hardData.characters[4]);
          vm.text = $sce.trustAsHtml(vm.hardData.text[0]);
          vm.button = $sce.trustAsHtml(vm.hardData.button[0]);
        });
      }

      function getData() {
        return tools.getData('/api/gradeonemissionfour')
        .then(function(data) {
          vm.hardData = data;
          return vm.hardData;
        });
      }
      // - to here
    }]);

})();

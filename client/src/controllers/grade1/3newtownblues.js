(function() {
angular.module('easyismath')
  .controller('NewTownBluesController', ['$rootScope', 'onethree', '$sce', '$scope', '$window', '$state', function($rootScope, onethree, $sce, $scope, $window, $state) {
    //to lock up
    if (!$rootScope.isAuthenticated) $state.go('home');
    //makes sure level 1 has been completed, if not go to home
    if (JSON.parse($window.localStorage.userProfile).medals.indexOf("Jumbo") === -1) $state.go('home');

    var vm = this;
    vm.hardData;
    vm.image;
    vm.text;
    vm.button;
    vm.clicked1 = onethree.firstClick;
    vm.clicked2 = onethree.nextClick;
    vm.counter = 1;
    vm.problems = false;
    vm.answer;
    vm.correctAnswer;
    vm.score = 0;

    //pulls data - from here
    activate();


    function activate() {
        return getData().then(function() {
          vm.image = $sce.trustAsHtml(vm.hardData.images[0]);
          vm.text = $sce.trustAsHtml(vm.hardData.text[0])
          vm.button = $sce.trustAsHtml(vm.hardData.button[0])
        });
    }

    function getData() {
        return onethree.getData()
            .then(function(data) {
                vm.hardData = data;
                return vm.hardData;
            });
    }
    // - to here

  }])
})();
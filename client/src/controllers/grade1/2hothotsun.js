(function() {
angular.module('easyismath')
  .controller('HotHotSunController', ['$rootScope', 'onetwo', '$sce', function($rootScope, onetwo, $sce) {
    //to lock up
    if (!$rootScope.isAuthenticated) $state.go('home');
    var vm = this;
    vm.hardData;
    vm.image;
    vm.text;
    vm.button;
    vm.clicked1 = onetwo.firstClick;
    vm.clicked2 = onetwo.nextClick;
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
        return onetwo.getData()
            .then(function(data) {
                vm.hardData = data;
                return vm.hardData;
            });
    }
    // - to here



  }])
})();
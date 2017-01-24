(function() {
  angular.module('easyismath')
    .controller('NavbarController', ['$rootScope', 'authService', 'userdata', '$state', '$window', function($rootScope, authService, userdata, $state, $window) {

      var vm = this;
      //this makes the authService accessible on the navbar template
      vm.authService = authService;

    }]);
})();
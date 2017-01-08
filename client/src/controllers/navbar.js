angular.module('easyismath')
  .controller('NavbarController', ['$rootScope','authService', 'userdata', '$state', '$window', function($rootScope, authService, userdata, $state, $window) {
    var vm = this;
    vm.authService = authService
  }])
angular.module('easyismath')
  .controller('MainController', ['$rootScope','authService', function($rootScope, authService) {
    this.authService = authService;
    console.log($rootScope.isAuthenticated)
  }])
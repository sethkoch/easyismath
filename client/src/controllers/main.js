angular.module('easyismath')
  .controller('MainController', ['authService', function(authService) {
    this.authService = authService;
  }])
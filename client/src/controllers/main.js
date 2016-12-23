angular.module('easyismath')
  .controller('MainController', ['$rootScope','authService', function($rootScope, authService) {
    this.authService = authService;
    var that = this;
    this.authService.getProfileDeferred().then(function(profile) {
      that.profile = profile;
      console.log(that.profile);
    })
  }])
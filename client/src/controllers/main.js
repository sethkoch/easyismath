angular.module('easyismath')
  .controller('MainController', ['$rootScope','authService', 'userdata', function($rootScope, authService, userdata) {
    this.authService = authService;
    var that = this;
    this.profile;
    this.authService.getProfileDeferred().then(function(profile) {
      that.profile = profile;
    }).then(function() {
    userdata.getData(that.profile.user_id);
    })
  }])
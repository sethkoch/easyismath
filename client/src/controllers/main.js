angular.module('easyismath')
  .controller('MainController', ['$rootScope','authService', 'userdata', function($rootScope, authService, userdata) {
    this.authService = authService;
    var that = this;
    this.authService.getProfileDeferred().then(function(profile) {
      that.profile = profile;
    }).then(function() {
      if(that.profile.user_id) {
      userdata.getData(that.profile.user_id);
      }
    })
  }])

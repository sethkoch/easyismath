angular.module('easyismath')
  .controller('MainController', ['$rootScope','authService', 'userdata', '$state', function($rootScope, authService, userdata, $state) {
    this.authService = authService;
    var that = this;
    this.authService.getProfileDeferred().then(function(profile) {
      that.profile = profile;
    }).then(function() {
      userdata.getData(that.profile.user_id);
    })
    //used for dynamic sref on the home page.  When the title of the current mission is clicked or the button is clicked, will send to the proper state.
    this.level = function(grade){
      $state.go($rootScope.userStuff.grade1);
    };

  }])

angular.module('easyismath')
  .controller('MainController', ['$rootScope','authService', 'userdata', '$state', function($rootScope, authService, userdata, $state) {
    var vm = this;
    vm.authService = authService;
    var that = vm;
    vm.authService.getProfileDeferred().then(function(profile) {
      that.profile = profile;
    }).then(function() {
      //puts user data on the rootScope = userStuff
      userdata.getData(that.profile.user_id);
    })
    //used for dynamic sref on the home page.  When the title of the current mission is clicked or the button is clicked, will send to the proper state.
    vm.level = function(grade){
      $state.go($rootScope.userStuff.grade1);
    };

  }])

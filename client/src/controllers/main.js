(function() {

  angular.module('easyismath')
    .controller('MainController', ['$rootScope', 'authService', 'userdata', '$state', '$window', function($rootScope, authService, userdata, $state, $window) {
      //if user is not authenticated then local storage, except for userProfile, gets wiped
      if (!$rootScope.isAuthenticated) {
        $window.localStorage.clear();
      }

      var vm = this;
      // vm.authService = authService;
      vm.profile;
      vm.logInToPlay = "Log in to play, it's free!"
      //this is neccesary to use authService from the navbar
      authService.getProfileDeferred().then(function(profile) {
        vm.profile = profile;
      })
      .then(function() {
          //puts user data on the rootScope = userStuff
        userdata.getData(vm.profile.user_id);
      });
      //used for dynamic sref on the home page.  When the title of the current mission is clicked or the button is clicked, will send to the proper state.
      vm.level = function(grade) {
        $state.go($rootScope.userStuff.grade1);
      };

    }]);

})();

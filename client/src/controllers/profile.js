angular.module('easyismath')
  .controller("ProfileController",['$window', '$rootScope', function($window, $rootScope) {
    var vm = this;
    //pulls the Auth0 profile and parses it into an object
    vm.auth0Profile = JSON.parse($window.localStorage.profile);
    vm.name = vm.auth0Profile.given_name;
    //pulls my database profile and parses it into an object, userdata/factory sets the profile onto local storage first in the main controller
    vm.userProfile = JSON.parse($window.localStorage.userProfile);
    vm.medals = vm.userProfile.medals;
  }])
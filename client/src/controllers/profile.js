angular.module('easyismath')
  .controller("ProfileController",['$window', '$rootScope', function($window, $rootScope) {
    var vm = this;

    //pulls the Auth0 profile and parses it into an object
    vm.auth0Profile = JSON.parse($window.sessionStorage.profile);
    vm.name = vm.auth0Profile.given_name || vm.auth0Profile.nickname
    //pulls my database profile and parses it into an object, userdata/factory sets the profile onto local storage first in the main controller
    vm.userProfile = JSON.parse($window.sessionStorage.userProfile);
    //grabs array of medals
    vm.medals = vm.userProfile.medals;
    //list all medals and true if possessed otherwise false
    vm.pete = vm.medals.indexOf("Pete") !== -1 || false;
    vm.sama = vm.medals.indexOf("Sam") !== -1 || false;

  }])
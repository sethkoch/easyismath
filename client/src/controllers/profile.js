angular.module('easyismath')
  .controller("ProfileController",['$window', '$rootScope', function($window, $rootScope) {
    //pulls the Auth0 profile and parses it into an object
    this.auth0Profile = JSON.parse($window.localStorage.profile);
    this.name = this.auth0Profile.given_name;
    //pulls my database profile and parses it into an object, userdata/factory sets the profile onto local storage first in the main controller
    this.userProfile = JSON.parse($window.localStorage.userProfile);
    this.medals = this.userProfile.medals;
  }])
angular.module('easyismath')
  .controller("ProfileController",['$window', function($window) {
    this.temp = JSON.parse($window.localStorage.profile);
    this.name = this.temp.given_name;
  }])
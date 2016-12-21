angular.module("easyismath",["ui.router"]);
angular.module("easyismath").config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/home"),e.state("home",{url:"/home",templateUrl:"../../templates/main/index.html",controller:"MainController as main",css:"../../content/css.css"})}]);
angular.module("easyismath").controller("MainController",function(){});
angular.module("easyismath",["auth0.lock","angular-jwt","ui.router"]).run(["$rootScope","authService","lock",function(e,t,r){e.authService=t,t.registerAuthenticationListener(),r.interceptHash()}]);
angular.module("easyismath").config(["$stateProvider","lockProvider","$urlRouterProvider",function(e,o,t){e.state("home",{url:"/home",templateUrl:"../../templates/main/index.html",controller:"MainController as main",css:"../../content/css.css"}),o.init({clientID:"PPAP5SR3NyoW8oXgSg9fI3DZ38lCcA3o",domain:"easyismath.auth0.com"}),t.otherwise("/home")}]);
angular.module("easyismath").controller("MainController",function(){});
!function(){"use strict";function t(t,e){function n(){t.show()}function i(){localStorage.removeItem("id_token"),e.unauthenticate()}function o(){t.on("authenticated",function(t){localStorage.setItem("id_token",t.idToken),e.authenticate()})}return{login:n,logout:i,registerAuthenticationListener:o}}angular.module("easyismath").service("authService",t),t.$inject=["lock","authManager"]}();
angular.module('easyismath', ['auth0.lock', 'angular-jwt', 'ui.router'])


  .run(['$rootScope', 'authService', 'lock', function ($rootScope, authService, lock) {
    // Put the authService on $rootScope so its methods
    // can be accessed from the nav bar
    $rootScope.authService = authService;

    // Register the authentication listener that is
    // set up in auth.service.js
    authService.registerAuthenticationListener();

    // Register the synchronous hash parser
    // when using UI Router
    lock.interceptHash();
  }])
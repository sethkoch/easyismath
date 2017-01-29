(function() {

  angular.module('easyismath', ['auth0.lock', 'angular-jwt', 'ui.router'])

    .run(['$rootScope', 'authService', 'lock', 'authManager', function ($rootScope, authService, lock, authManager) {
      // Put the authService on $rootScope so its methods
      // can be accessed from the nav bar
      $rootScope.authService = authService;
      // Register the authentication listener that is
      // set up in auth.service.js
      authService.registerAuthenticationListener();
      //checks token validity after a refresh - lib/angular-jwt/src/services/authManager.js
      authManager.checkAuthOnRefresh();
      // Register the synchronous hash parser
      // when using UI Router
      lock.interceptHash();

    }]);

})();

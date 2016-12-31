(function () {

  'use strict';

  angular
    .module('easyismath')
    .service('authService', authService);

  authService.$inject = ['$q', 'lock', 'authManager', '$rootScope'];

  function authService( $q, lock, authManager, $rootScope) {
    //part of getting user profile
    var userProfile = JSON.parse(localStorage.getItem('profile')) || null;
    var deferredProfile = $q.defer();

    if (userProfile) deferredProfile.resolve(userProfile);

    function getProfileDeferred() {
      return deferredProfile.promise;
    }
    // to here
    function login() {
      lock.show();
    }

    // Logging out just requires removing the user's
    // id_token and profile
    function logout() {
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
      $rootScope.userStuff = '';
      authManager.unauthenticate();

    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    function registerAuthenticationListener() {
      lock.on('authenticated', function (authResult) {
        //part of getting user profile from here
        lock.getProfile(authResult.idToken, function (error, profile) {
          if (error) {
            return console.log(error);
          }

          localStorage.setItem('profile', JSON.stringify(profile));
          deferredProfile.resolve(profile);
        });
        // to here
        localStorage.setItem('id_token', authResult.idToken);
        authManager.authenticate();

      });
    }

    return {
      login: login,
      logout: logout,
      registerAuthenticationListener: registerAuthenticationListener,
      getProfileDeferred: getProfileDeferred
    }
  }
})();
angular.module('easyismath')
  .config(['$stateProvider', 'lockProvider', '$urlRouterProvider', 'jwtOptionsProvider',  function($stateProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {



    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: '../../templates/main/index.html',
        controller: 'MainController as main',
        css: '../../content/css.css'
      })

      .state('missions', {
        url: '/missions',
        templateUrl: '../../templates/missions/missions.html',
        controller: 'MissionsController as mission',
        css: '../../content/css.css'
      })

       lockProvider.init({
         clientID: 'PPAP5SR3NyoW8oXgSg9fI3DZ38lCcA3o',
         domain: 'easyismath.auth0.com'
    });

       jwtOptionsProvider.config({
        tokenGetter: function() {
          return localStorage.getItem('id_token');
        }
       })

        $urlRouterProvider.otherwise('/home');

  }])
angular.module('easyismath')
  .config(['$stateProvider', 'lockProvider', '$urlRouterProvider', 'jwtOptionsProvider',  function($stateProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: '../../templates/main/index.html',
        controller: 'MainController as main',
        css: '../../content/css.css'
      })
      //this state is chosen by a string, that's why the space
      .state('Penguin Troubles', {
        url: '/penguintroubles',
        templateUrl: '../../templates/missions/grade1/1penguintroubles.html',
        controller: 'PenguinTroublesController as penguin'
      })

      .state('profile', {
        url:'/profile',
        templateUrl: '../../templates/profile.html',
        controller: 'ProfileController as profile'
      })

      .state('reward', {
        url: '/reward',
        templateUrl: '../../templates/reward.html',
        controller: 'RewardController as reward'
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



  }])
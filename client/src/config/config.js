(function() {
  angular.module('easyismath')
    .config(['$stateProvider', 'lockProvider', '$urlRouterProvider', 'jwtOptionsProvider', function($stateProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider

        .state('home', {
          url: '/home',
          templateUrl: '../../templates/main/index.html',
          controller: 'MainController as main',
          css: '../../content/css.css'
        })
        //this state is chosen by a string, that's why the space
        //Grade 1 mission 1
        .state('Penguin Troubles', {
          url: '/penguintroubles',
          templateUrl: '../../templates/missions/grade1/1penguintroubles.html',
          controller: 'PenguinTroublesController as penguin'
        })

        //Grade 1 mission 2
        .state('Level 2 : Hot, Hot Sun', {
          url: '/hothotsun',
          templateUrl: '../../templates/missions/grade1/2hothotsun.html',
          controller: 'HotHotSunController as sun'
        })

        .state('Level 3 : New Town Blues', {
          url: '/newtownblues',
          templateUrl: '../../templates/missions/grade1/3newtownblues.html',
          controller: 'NewTownBluesController as newtown'
        })

        .state('Level 4 : Lisa and Jumbo Play', {
          url: '/lisaandjumboplay',
          templateUrl: '../../templates/missions/grade1/4lisaandjumboplay.html',
          controller: 'LisaAndJumboPlayController as lisa'
        })

        .state('profile', {
          url: '/profile',
          templateUrl: '../../templates/profile.html',
          controller: 'ProfileController as profile'
        })

        .state('reward', {
          url: '/reward',
          templateUrl: '../../templates/reward.html',
          controller: 'RewardController as reward'
        })

        .state('comingsoon', {
          url: '/comingsoon',
          templateUrl: '../../templates/comingsoon.html',
        });

      lockProvider.init({
        clientID: 'PPAP5SR3NyoW8oXgSg9fI3DZ38lCcA3o',
        domain: 'easyismath.auth0.com',
        options: {
          theme: {
            logo: '../../content/easyismathsmall.png',
          },
          languageDictionary: {
            title: "Ready for adventure?"
          }
        }
      });

      jwtOptionsProvider.config({
        tokenGetter: function() {
          return localStorage.getItem('id_token');
        }
      });

    }]);
})();
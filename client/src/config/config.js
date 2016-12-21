angular.module('easyismath')
  .config(['$stateProvider', 'lockProvider', '$urlRouterProvider', function($stateProvider, lockProvider, $urlRouterProvider) {



    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: '../../templates/main/index.html',
        controller: 'MainController as main',
        css: '../../content/css.css'
      })

       lockProvider.init({
         clientID: 'PPAP5SR3NyoW8oXgSg9fI3DZ38lCcA3o',
         domain: 'easyismath.auth0.com'
    });

        $urlRouterProvider.otherwise('/home');

  }])
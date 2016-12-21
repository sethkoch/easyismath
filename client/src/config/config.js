angular.module('easyismath')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: '../../templates/main/index.html',
        controller: 'MainController as main',
        css: '../../content/css.css'
      })


  }])
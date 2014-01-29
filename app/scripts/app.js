'use strict';

angular.module('BieberTweetsAngularApp', ['ngRoute', 'ngAnimate','ngSanitize', 'btford.socket-io'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc overview
 * @name etWorldCupApp
 * @description
 * # etWorldCupApp
 *
 * Main module of the application.
 */
angular
  .module('etWorldCupApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ui.bootstrap'
  ])
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

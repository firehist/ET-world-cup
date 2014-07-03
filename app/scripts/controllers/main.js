'use strict';

/**
 * @ngdoc function
 * @name etWorldCupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the etWorldCupApp
 */
angular.module('etWorldCupApp')
  .controller('MainCtrl', function ($scope) {

    $scope.name = "me-" + Math.round(Math.random() * (999 - 100) + 100);
  });

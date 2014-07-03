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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .directive('etsurvey', function () {
    'use strict';

    console.debug('ok');


    return {
      template: 'views/etsurvey.html',
      link: function (scope, element, attrs) {



        console.debug('ok');

      }
    };

  });

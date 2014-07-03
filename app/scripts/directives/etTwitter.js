'use strict';

angular.module('etWorldCupApp')
  .directive('ettwitter', function () {
    'use strict';

    return {
      templateUrl: 'views/ettwitter.html',
      link: function (scope, element, attrs) {

        scope.testingvalue = "toto";

        scope.changeIt = function (t) {
          scope.testingvalue = t;
        };


      }
    };

  });

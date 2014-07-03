'use strict';

angular.module('etWorldCupApp')
  .directive('etchat', function ($firebase) {
    'use strict';

    return {
      templateUrl: 'views/etchat.html',
      link: function (scope, element, attrs) {

        var ref = new Firebase("https://fiery-fire-9366.firebaseio.com/etchat");
        scope.messages = $firebase(ref);
        scope.addMessage = function(e) {
          if (e.keyCode != 13) return;
          scope.messages.$add({from: scope.name, body: scope.msg});
          scope.msg = "";
        }


      }
    };

  });

'use strict';

angular.module('etWorldCupApp')
  .directive('etsurvey', function ($firebase, $modal) {
    'use strict';

    return {
      templateUrl: 'views/etsurvey.html',
      link: function (scope, element, attrs) {

        var url = "https://fiery-fire-9366.firebaseio.com/etsurvey";
        var ref = new Firebase(url);
        scope.surveys = $firebase(ref);

        scope.addSurvey = function(e){

          scope.surveys.$add({
            "question": "Qui va remporter le match France - Allemagne ?",
            "responses": ["France", "Allemagne"],
            "author": "ljaures@gmail.com",
            "status": 1,
            "createdAt": +(new Date())
          });

        };

        scope.open = function () {
            var modalInstance = $modal.open({
              templateUrl: 'views/etSurveyAdd.html',
              controller: 'newSurveyCtrl'
            });
        };

        scope.removeSurvey = function(id) {
          var item = new Firebase(url + "/" + id);
          item.remove();
        };


      }
    };

  });

'use strict';

/**
 * @ngdoc function
 * @name etWorldCupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the etWorldCupApp
 */
angular.module('etWorldCupApp')
  .controller('newSurveyCtrl', function (appService, $scope, $modalInstance, $firebase) {

    $scope.survey = {
      question: "",
      answer1: "",
      answer2: ""
    };

  	$scope.question = "question";
    var url = "https://fiery-fire-9366.firebaseio.com/etsurvey";
    var ref = new Firebase(url);
    $scope.surveys = $firebase(ref);

  	$scope.save = function() {
      appService.writeQuestion({
        "question": $scope.survey.question,
        "responses": [$scope.survey.answer1, $scope.survey.answer2],
        "author": "ljaures@gmail.com",
        "status": 1,
        "createdAt": +(new Date())
      });
  		$modalInstance.close();
  	};

  	$scope.cancel = function(e) {
		$modalInstance.dismiss('cancel');
  	};
  	
  });

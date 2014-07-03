'use strict';

/**
 * @ngdoc function
 * @name etWorldCupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the etWorldCupApp
 */
angular.module('etWorldCupApp')
  .controller('newSurveyCtrl', function ($scope, $modalInstance, $firebase) {

  	$scope.question = "question";
    var url = "https://fiery-fire-9366.firebaseio.com/etsurvey";
    var ref = new Firebase(url);
    $scope.surveys = $firebase(ref);

  	$scope.save = function() {
  		debugger;
  		$scope.surveys.$add({
            "question": $scope.question,
            "responses": [$scope.answer1, $scope.answer2],
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

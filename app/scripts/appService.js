'use strict';

angular.module('etWorldCupApp')
  .factory('appService', function () {

    var AppService = function () {};

    AppService.prototype.writeQuestion = function (question) {
      var ref = new Firebase("https://fiery-fire-9366.firebaseio.com/survey/"+encodeURIComponent(question.question));
      ref.set(question);
    };

    AppService.prototype.writeResponse = function (question, reponse, user) {
      var ref = new Firebase("https://fiery-fire-9366.firebaseio.com/survey/"+encodeURIComponent(question)+"/answers/"+encodeURIComponent(user));
      ref.set(reponse);
    };

    AppService.prototype.readAnswers = function (question) {
      var ref = new Firebase("https://fiery-fire-9366.firebaseio.com/survey/"+encodeURIComponent(question)+"/answers");
      var readFunc = function(snapshot) {
        var reponses = JSON.stringify(snapshot.val());
        console.log(reponses);
        ref.off('value', readFunc);
      };

      ref.on('value', readFunc);
    };

    var questionJson;
    AppService.prototype.readQuestion = function (question) {
      var ref = new Firebase("https://fiery-fire-9366.firebaseio.com/survey/"+encodeURIComponent(question));

      var readFunc = function(snapshot) {
        questionJson = JSON.stringify(snapshot.val());
        console.log(questionJson);
        ref.off('value', readFunc);
      };

      ref.on('value', readFunc);
    };


    return new AppService();

  });

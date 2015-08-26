var app = angular.module("FlashCards", []);

app.controller("FlashCardController", function ($scope) {
	$scope.flashCard = {
	    question: 'What is Angular?',
	    answers: [
	        { text: 'A front-end framework for great power!', correct: true },
	        { text: 'Something lame, who cares, whatever.', correct: false },
	        { text: 'Some kind of fish, right?', correct: false }
	    ],
	    answered: false,
	};
	
	$scope.answeredCorrectly = "";
	$scope.answerQuestion = function (correct) {
		if (correct) {
			console.log("correct answer");
			$scope.answeredCorrectly = true;
	

		}
		else {
			console.log("incorrect answer");
			$scope.answeredCorrectly = false;
			
		}
		console.log("answered correctly:", $scope.answeredCorrectly);
		$scope.flashCard.answered = true;
		console.log("answered? ", $scope.flashCard.answered);
	};

});
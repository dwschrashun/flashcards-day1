var app = angular.module("FlashCards", []);

app.controller("FlashCardController", function ($scope) {	
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

app.controller('MainController', function ($scope) {
    $scope.flashCards = [{
        question: 'ZWhat is Angular?',
        answers: [{
            text: 'A front-end framework for great power!',
            correct: true
        }, {
            text: 'Something lame, who cares, whatever.',
            correct: false
        }, {
            text: 'Some kind of fish, right?',
            correct: false
        }],
        answered: false
    }, {
        question: 'What is a controller?',
        answers: [{
            text: 'Something that manages my front-end routes',
            correct: false
        }, {
            text: 'A function that allows me to manage a scope',
            correct: true
        }, {
            text: 'An Angular template',
            correct: false
        }],
        answered: false
    }, {
        question: 'What does {{ }} do?',
        answers: [{
            text: 'It runs some Javascript',
            correct: false
        }, {
            text: 'It looks for variables in HTML',
            correct: false
        }, {
            text: 'It runs an Angular expression that accesses my $scope',
            correct: true
        }],
        answered: false
    }];
});

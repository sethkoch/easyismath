(function(){
angular.module('easyismath')
  .controller('PenguinTroublesController',['$sce', '$http', 'tools', '$rootScope', 'oneone','$window', function($sce, $http, tools, $rootScope, oneone, $window) {
    var vm = this;
    vm.counter = 0;
    vm.answer="";
    vm.penguinsSaved = 0;
    vm.currentButtonText;
    vm.currentText;
    vm.currentImage;
    vm.quizData;


    //pulls data used by the quiz that is hard coded in the server, sets some variables to the initial values 1 penguintroublesservices.js does the api calling- from here
    activate();


    function activate() {
        return getData().then(function() {
          vm.currentButtonText = $sce.trustAsHtml(vm.quizData.buttonText[vm.counter]);
          vm.currentText = $sce.trustAsHtml(vm.quizData.data[vm.counter]);
          vm.currentImage = $sce.trustAsHtml(vm.quizData.images[vm.counter]);
        });
    }

    function getData() {
        return oneone.getData()
            .then(function(data) {
                vm.quizData = data;
                return vm.quizData;
            });
    }
    // - to here



    //to make sure that pictureNumber picked inside of clicked is not the same as the last number, I don't want the same picture twice.
    $rootScope.lastPictureNumber = 0;
    //vm stores the number of which number the last picture was so that it can be compared to the answer for scoring.
    $rootScope.answerCompare;

    vm.clicked = function() {
        var length = vm.quizData.images.length;
        vm.counter ++;
        //before questions start, sets the pictures and text for initial story
        if (vm.counter < 2) {
            vm.currentButtonText = $sce.trustAsHtml(vm.quizData.buttonText[vm.counter]);
            vm.currentText = $sce.trustAsHtml(vm.quizData.data[vm.counter]);
            vm.currentImage = $sce.trustAsHtml(vm.quizData.images[vm.counter]);
            return;
        }
        //now begins quiz
        if (vm.counter > 1) {
            //button text stays answer
            vm.currentButtonText = $sce.trustAsHtml("Answer");
            //text now stays the same
            vm.currentText = $sce.trustAsHtml("Quick, how many penguins are there?  Get 8 points to win!");

            //gets random image from services/generaltools/factory.js
            vm.currentImage = $sce.trustAsHtml(tools.getImage(vm.quizData.images, 2));
            //the first quiz image showed is shown before an answer is recorded.  The answer will be recorded on the next picture shown, vm is why a answerCompare var is neccessary.
            if(Number(vm.answer) === vm.quizData.questionAnswers[$rootScope.answerCompare]) {
                vm.penguinsSaved ++;
                vm.answer = "";
            }
            $rootScope.answerCompare = $rootScope.lastPictureNumber;
            vm.answer = "";
        }

        if (vm.penguinsSaved === 8) {

            vm.currentText = $sce.trustAsHtml("You did it, you saved the penguins!");
            vm.currentImage = $sce.trustAsHtml(vm.quizData.images[0]);
            oneone.rewardMedal($window.localStorage.userid,"Pete");
        }
    }
  }])
})();
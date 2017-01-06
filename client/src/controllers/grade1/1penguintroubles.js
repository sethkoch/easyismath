angular.module('easyismath')
  .controller('PenguinTroublesController',['$sce', '$http', 'tools', '$rootScope', function($sce, $http, tools, $rootScope) {
    this.counter = 0;
    this.answer="";
    this.penguinsSaved = 0;
    this.currentButtonText;
    this.currentText;
    this.currentImage;
    this.quizData;

    //pulls data used by the quiz that is hard coded in the server, sets some variables to the initial values
    $http.post('/api/gradeonemissionone', {})
        .then((res) => {
          this.quizData = res.data;
          this.currentButtonText = $sce.trustAsHtml(this.quizData.buttonText[this.counter]);
          this.currentText = $sce.trustAsHtml(this.quizData.data[this.counter]);
          this.currentImage = $sce.trustAsHtml(this.quizData.images[this.counter]);
        })

    //to make sure that pictureNumber picked inside of clicked is not the same as the last number, I don't want the same picture twice.
    $rootScope.lastPictureNumber = 0;
    //this stores the number of which number the last picture was so that it can be compared to the answer for scoring.
    $rootScope.answerCompare;

    this.clicked = function() {
        var length = this.quizData.images.length;
        this.counter ++;
        //before questions start, sets the pictures and text for initial story
        if (this.counter < 2) {
            this.currentButtonText = $sce.trustAsHtml(this.quizData.buttonText[this.counter]);
            this.currentText = $sce.trustAsHtml(this.quizData.data[this.counter]);
            this.currentImage = $sce.trustAsHtml(this.quizData.images[this.counter]);
            return;
        }
        //now begins quiz
        if (this.counter > 1) {
            //button text stays answer
            this.currentButtonText = $sce.trustAsHtml("Answer");
            //text now stays the same
            this.currentText = $sce.trustAsHtml("Quick, how many penguins are there?");

            //gets random image from services/generaltools/factory.js
            this.currentImage = $sce.trustAsHtml(tools.getImage(this.quizData.images, 2));
            //the first quiz image showed is shown before an answer is recorded.  The answer will be recorded on the next picture shown, this is why a answerCompare var is neccessary.
            if(Number(this.answer) === this.quizData.questionAnswers[$rootScope.answerCompare]) {
                this.penguinsSaved ++;
                this.answer = "";
            }
            $rootScope.answerCompare = $rootScope.lastPictureNumber;
            this.answer = "";
        }

        if (this.penguinsSaved === 8) {
            this.currentText = $sce.trustAsHtml("You did it, you saved the penguins!");
            this.currentImage = $sce.trustAsHtml(this.quizData.images[0]);
            this.currentButtonText = $sce.trustAsHtml("Your Reward");
        }
    }
  }])
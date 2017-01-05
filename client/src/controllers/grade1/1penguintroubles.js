angular.module('easyismath')
  .controller('PenguinTroublesController',['$sce', '$http', 'tools', '$rootScope', function($sce, $http, tools, $rootScope) {
    this.counter = 0;
    this.answer="";
    this.penguinsSaved = 0;
    this.currentButtonText;
    this.currentText;
    this.currentImage;
    this.quizData;

    $http.post('/api/gradeonemissionone', {})
        .then((res) => {
          this.quizData = res.data;
          this.currentButtonText = $sce.trustAsHtml(this.quizData.buttonText[this.counter]);
          this.currentText = $sce.trustAsHtml(this.quizData.data[this.counter]);
          this.currentImage = $sce.trustAsHtml(this.quizData.images[this.counter]);
        })

    //to make sure that pictureNumber picked inside of clicked is not the same as the last number, I don't want the same picture twice.
    this.lastPictureNumber = 0;
    //just don't worry about it, it works, leave this alone in a cold dark place where it belongs
    this.pictureBefore = 0;

    this.clicked = function() {
        var length = this.quizData.images.length;
        var pictureNumber = 0;
        this.counter ++;
        if (this.counter < 2) {
            this.currentButtonText = $sce.trustAsHtml(this.quizData.buttonText[this.counter]);
            this.currentText = $sce.trustAsHtml(this.quizData.data[this.counter]);
            this.currentImage = $sce.trustAsHtml(this.quizData.images[this.counter]);
            return;
        }
        if (this.counter > 1) {
            this.currentButtonText = $sce.trustAsHtml("Answer");
            this.currentText = $sce.trustAsHtml("Quick, how many penguins are there?");
            this.getImage = function() {
              var getNumber = function () {
                return Math.floor(Math.random() * (length - 2))
              }
              pictureNumber = getNumber();
              while(pictureNumber === this.lastPictureNumber) {
                pictureNumber = getNumber();
              }
              this.lastPictureNumber = pictureNumber;
              return this.quizData.images.slice(2)[pictureNumber];
            }
            this.currentImage = $sce.trustAsHtml(this.getImage());

            if(Number(this.answer) === this.quizData.questionAnswers[this.pictureBefore]) {
                this.penguinsSaved ++;
                this.answer = "";
            }
        }
        this.pictureBefore = this.lastPictureNumber;
        if (this.penguinsSaved === 8) {
            this.currentText = $sce.trustAsHtml("You did it, you saved the penguins!");
            this.currentImage = $sce.trustAsHtml(this.quizData.images[0]);
            this.currentButtonText = $sce.trustAsHtml("Your Reward");
        }
    }
  }])
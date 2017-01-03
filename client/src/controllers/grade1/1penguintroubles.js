angular.module('easyismath')
  .controller('PenguinTroublesController',['$sce', function($sce) {
    this.counter = 0;
    this.answer="";
    this.penguinsSaved = 0;

    this.data = ["<p>Will you save the penguins?</p>", "<p>A big monster wants to eat them all!</p>", "<p>Quick, how many penguins are there?</p>", "<p>Some caves are big, some caves are small.</p>", "<p>Can you help the penguins?</p>", "<p>Tell the penguins how many can go in each cave!</p>", "<p>Time to train!</p>"];

    this.images = ["<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1babypenguin.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1monster.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1fourpenguins.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1onepenguin.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1onepenguinpainter.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1oneswimmingpenguin.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1threekingpenguins.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1threepenguins.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1twelvepenguins.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1twopenguinbrothers.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1twozoopenguins.jpg' class='img-responsive' style='max-height:460px' />"];

    this.questionAnswers = [4, 1, 1, 1, 3, 3, 12, 2, 2]

    this.buttonText = ["Yes!", "Ahhhhhh", "Answer"];

    this.currentButtonText = $sce.trustAsHtml(this.buttonText[this.counter]);
    this.currentText = $sce.trustAsHtml(this.data[this.counter]);
    this.currentImage = $sce.trustAsHtml(this.images[this.counter]);
    //to make sure that pictureNumber picked inside of clicked is not the same as the last number, I don't want the same picture twice.
    this.lastPictureNumber = 0;
    this.pictureBefore = 0;

    this.clicked = function() {
        var length = this.images.length;
        var pictureNumber = 0;
        this.counter ++;
        if (this.counter < 2) {
            this.currentButtonText = $sce.trustAsHtml(this.buttonText[this.counter]);
            this.currentText = $sce.trustAsHtml(this.data[this.counter]);
            this.currentImage = $sce.trustAsHtml(this.images[this.counter]);
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
              return this.images.slice(2)[pictureNumber];
            }
            this.currentImage = $sce.trustAsHtml(this.getImage());

            if(Number(this.answer) === this.questionAnswers[this.pictureBefore]) {
                this.penguinsSaved ++;
                this.answer = "";
            }
        }
        this.pictureBefore = this.lastPictureNumber;
        if (this.penguinsSaved === 8) {
            this.currentText = $sce.trustAsHtml("You did it, you saved the penguins!");
            this.currentImage = $sce.trustAsHtml(this.images[0]);
            this.currentButtonText = $sce.trustAsHtml("Your Reward");
        }
    }
  }])
angular.module('easyismath')
  .controller('PenguinTroublesController',['$sce', function($sce) {
    this.textCounter = 0;
    this.imageCounter = 0;
    this.buttonTextCounter = 0;

    this.data = ["<p>Will you save the penguins?</p>", "<p>A big monster will eat them all!</p>", "<p>The penguins must get into caves.</p>", "<p>Some caves are big, some caves are small.</p>", "<p>Can you help the penguins?</p>", "<p>Tell them how many penguins can go in each cave!</p>", "<p>First you must train.</p>"];

    this.images = ["<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1babypenguin.jpg' />"];

    this.buttonText = ["Yes!"];

    this.currentButtonText = $sce.trustAsHtml(this.buttonText[this.buttonTextCounter]);
    this.currentText = $sce.trustAsHtml(this.data[this.textCounter]);
    this.currentImage = $sce.trustAsHtml(this.images[this.imageCounter]);
  }])
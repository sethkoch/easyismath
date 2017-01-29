(function() {

  angular.module('easyismath')
    .factory('onefour', ['$http', '$state', '$rootScope', '$sce', '$window', '$timeout', 'tools', function($http, $state, $rootScope, $sce, $window, $timeout, tools) {

      return {
        firstClick: firstClick,
        nextClick: nextClick
      };

      var lisa;

      function firstClick() {

        if (this.counter > 4) {
          this.text = $sce.trustAsHtml(this.hardData.text[this.counter]);
          this.button = $sce.trustAsHtml(this.hardData.button[3]);
          this.image = $sce.trustAsHtml(tools.getImage(this.hardData.images));
          //uses top button and input field in the html template when problems is set to true
          this.problems = true;
          this.counter ++;
          return;
        }
        if (this.counter > 3) {
          this.text = $sce.trustAsHtml(this.hardData.text[this.counter]);
          this.image = $sce.trustAsHtml(this.hardData.characters[2]);
          this.button = $sce.trustAsHtml(this.hardData.button[1]);
          this.counter ++;
          //sets Reward to show on reward screen
          return;
        }
        if (this.counter > 2) {
          //changes the view from two images to one
          this.doubleImage = false;
          this.text = $sce.trustAsHtml(this.hardData.text[this.counter]);
          this.image = $sce.trustAsHtml(this.hardData.characters[0]);
          this.counter ++;
          return;
        }
        if (this.counter > 1) {
          // image1 and image2 stay the same
          this.text = $sce.trustAsHtml(this.hardData.text[this.counter]);
          this.counter ++;
          return;
        }
        //counter begins as 1
        // this.image stays the same
        // this.image2 stays the same
        this.text = $sce.trustAsHtml(this.hardData.text[this.counter]);
        this.button = $sce.trustAsHtml(this.hardData.button[0]);
        //gives me a variable lisa that will be this binded to the level 4 controller;
        lisa = this;
        this.counter ++;

      }

      function nextClick() {
        this.correctAnswer = this.hardData.answers[$rootScope.lastPictureNumber];
        this.image = $sce.trustAsHtml(tools.getImage(this.hardData.images));
        //hijacks to check if we have a winner
        if (this.score === 19) {
          winner();
          return;
        }
        //by the time this is clicked one question has already been answered so I check that first
        if (this.correctAnswer === Number(this.answer)) {
          this.score ++;
          this.image = $sce.trustAsHtml(this.hardData.display[0]);
          $timeout(putImageBack, 500);
        }
        if (this.correctAnswer !== Number(this.answer)) {
          this.image = $sce.trustAsHtml(this.hardData.display[1]);
          $timeout(putImageBack, 500);
        }
        this.answer = '';
      }

      function winner () {
        //sets button back to calling firstClick on click, sets image to water, and button text to thank you
        lisa.problems = false;
        lisa.image = $sce.trustAsHtml(lisa.hardData.characters[3]);
        lisa.text = $sce.trustAsHtml(lisa.hardData.text[6]);
        lisa.button = '';
        $timeout(function() {
          lisa.image = $sce.trustAsHtml(lisa.hardData.characters[3]);
          lisa.text = $sce.trustAsHtml(lisa.hardData.text[7]);
        }, 7000);
        $timeout(function() {
          tools.setReward('Sarah', '<img src="https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-4/1-4sarah.png" class="img-responsive" style="max-height:460px" />');
          tools.saveReward('Lisa', 'Level 5 : Coming soon...', 900 );
        }, 15000);
      }

      function putImageBack () {
        lisa.image = $sce.trustAsHtml(lisa.hardData.images[$rootScope.lastPictureNumber]);
      }

    }]);

})();

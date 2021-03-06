(function() {

  angular.module('easyismath')
    .factory('onetwo', ['$http', '$state', '$rootScope', '$sce', '$window', '$timeout', 'tools', function($http, $state, $rootScope, $sce, $window, $timeout, tools) {

      return {
        firstClick: firstClick,
        nextClick: nextClick
      };

      var sun;

      function firstClick() {
        if (this.counter > 3) {
          tools.setReward('Jumbo', '<img src="https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2jumbo.png" class="img-responsive" style="max-height:460px" />');
          tools.saveReward('Jumbo', 'Level 3 : New Town Blues', 800 );
          return;
        }
        if (this.counter > 2) {
          this.problems = true;
          this.button = $sce.trustAsHtml(this.hardData.button[2]);
          //this creates the first addition problem, prints it to the screen, and stores the correct  answer in the variable correctAnswer
          var nums = tools.randomTwoNumAdd(5);
          this.text = $sce.trustAsHtml(nums.none + ' + ' + nums.ntwo + ' = ');
          this.correctAnswer = nums.answer;
          this.counter ++;
          return;
        }
        if (this.counter > 1) {
          this.text = $sce.trustAsHtml(this.hardData.text[this.counter]);
          this.counter ++;
          return;
        }
        //counter begins as 1
        this.image = $sce.trustAsHtml(this.hardData.images[this.counter]);
        this.text = $sce.trustAsHtml(this.hardData.text[this.counter]);
        this.button = $sce.trustAsHtml(this.hardData.button[this.counter]);
        //gives me a variable sun that will be this binded to the HotHotSunController;
        sun = this;
        this.counter ++;
      }

      function nextClick() {
        //hijacks to check if we have a winner
        if (this.score === 20) {
          winner();
          return;
        }
        //by the time this is clicked one question has already been answered so I check that first
        if (this.correctAnswer === Number(this.answer)) {
          this.score ++;
          sun.image = $sce.trustAsHtml(sun.hardData.images[4]);
          $timeout(putImageBack, 500);
        }
        if (this.correctAnswer !== Number(this.answer)) {
          this.image = $sce.trustAsHtml(this.hardData.images[5]);
          $timeout(putImageBack, 500);
        }
        var nums = tools.randomTwoNumAdd(5);
        this.text = $sce.trustAsHtml(nums.none + ' + ' + nums.ntwo + ' = ');
        this.correctAnswer = nums.answer;
        this.answer = '';
      }

      function winner () {
        //sets button back to calling firstClick on click, sets image to water, and button text to thank you
        sun.problems = false;
        sun.image = $sce.trustAsHtml(sun.hardData.images[2]);
        sun.text = $sce.trustAsHtml(sun.hardData.text[3]);
        sun.button = $sce.trustAsHtml(sun.hardData.button[3]);
      }

      function putImageBack () {
        sun.image = $sce.trustAsHtml(sun.hardData.images[1]);
      }

    }]);

})();

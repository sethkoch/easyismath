(function(){
angular.module('easyismath')
  .factory('onetwo', ['$http', '$state', '$rootScope', '$sce', '$window', function($http, $state, $rootScope, $sce, $window) {

    return {
      getData : getData,
      firstClick: firstClick,
      nextClick: nextClick
    }

    var sun;

    function getData() {
      return $http.post('/api/gradeonemissiontwo', {})
        .then(getDataComplete)
        .catch(getDataFailed);

      function getDataComplete(res) {
        return res.data
      }

      function getDataFailed(err) {
        console.log(err);
      }
    }

    function firstClick() {
      if (this.counter > 2) {
       this.problems = true;
       this.button = $sce.trustAsHtml(this.hardData.button[2]);
       //this creates the first addition problem, prints it to the screen, and stores the correct answer in the variable correctAnswer
       var nums = randomAddProblem();
       this.text = $sce.trustAsHtml(nums.none + " + " + nums.ntwo + " = ");
       this.correctAnswer = nums.answer
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
      sun = this;
      this.counter ++;
    }




    function  nextClick() {
      //by the time this is clicked one question has already been answered so I check that first
      if (this.correctAnswer === Number(this.answer)) this.score ++;
      if (this.score === 2) {
        winner();
        return;
      }
      var nums = randomAddProblem();
      this.text = $sce.trustAsHtml(nums.none + " + " + nums.ntwo + " = ");
      this.correctAnswer = nums.answer;
      this.answer = "";
    }



    function randomAddProblem () {
      var randomNumber1 = Math.floor(Math.random() * 10);
      var randomNumber2 = Math.floor(Math.random() * 10);
      var answer = randomNumber1 + randomNumber2;
      return {
        none : randomNumber1,
        ntwo : randomNumber2,
        answer : answer
      }
    }

    function winner () {
      sun.problems = false;
      sun.image = $sce.trustAsHtml(sun.hardData.images[2]);
      sun.text = $sce.trustAsHtml(sun.hardData.text[3]);
      sun.button = $sce.trustAsHtml(sun.hardData.button[3]);
    }



  }])
})();
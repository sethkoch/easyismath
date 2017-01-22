(function(){
angular.module('easyismath')
  .factory('onethree', ['$http', '$state', '$rootScope', '$sce', '$window', '$timeout', 'tools', function($http, $state, $rootScope, $sce, $window, $timeout, tools) {

    return {
      getData : getData,
      firstClick: firstClick,
      nextClick: nextClick
    }

    var newtown;
    var scope;

    function getData() {
      return $http.post('/api/gradeonemissionthree', {})
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
      if (this.counter > 3) {
        reward();
        return;
      }
      if (this.counter > 2) {
       this.problems = true;
       this.button = $sce.trustAsHtml(this.hardData.button[2]);
       //this creates the first addition problem, prints it to the screen, and stores the correct answer in the variable correctAnswer
       var nums = tools.randomTwoNumAdd(16);
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
      //gives me a variable sun that will be this binded to the HotHotSunController;
      newtown = this;
      this.counter ++;
    }




    function  nextClick() {
      //hijacks to check if we have a winner
      if (this.score === 20) {
        winner();
        return;
      }
      //by the time this is clicked one question has already been answered so I check that first
      if (this.correctAnswer === Number(this.answer)) {
        this.score ++;
        newtown.image = $sce.trustAsHtml(newtown.hardData.images[4]);
        $timeout(putImageBack, 500)

      }
      if (this.correctAnswer !== Number(this.answer)) {
        this.image = $sce.trustAsHtml(this.hardData.images[5]);
        $timeout(putImageBack, 500);
      }


      var nums = tools.randomTwoNumAdd(16);
      this.text = $sce.trustAsHtml(nums.none + " + " + nums.ntwo + " = ");
      this.correctAnswer = nums.answer;
      this.answer = "";
    }




    function winner () {
      //sets button back to calling firstClick on click, sets image to water, and button text to thank you
      newtown.problems = false;
      newtown.image = $sce.trustAsHtml(newtown.hardData.images[2]);
      newtown.text = $sce.trustAsHtml(newtown.hardData.text[3]);
      newtown.button = $sce.trustAsHtml(newtown.hardData.button[3]);
    }

    function reward () {
      $window.localStorage.reward = "Lisa";
      $window.localStorage.rewardImage = "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-3/1-3lisa.png' class='img-responsive' style='max-height:460px' />";
      $http.post('/api/rewardmedal', {userid:JSON.parse($window.localStorage.profile).user_id, medal: "Lisa", level: "Level 4 : Lisa and Jumbo Play", points: 1200 })
        .then(function(res) {
            $state.go('reward');
          })

    }

    function putImageBack () {
        newtown.image = $sce.trustAsHtml(newtown.hardData.images[1]);
    }


  }])
})();
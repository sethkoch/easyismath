(function() {

  angular.module('easyismath')
    .factory('tools', ['$state', '$rootScope', '$http', '$sce', '$window', function($state, $rootScope, $http, $sce, $window) {
      //returns a random number based upon the length of an array, the parameter takes the length of an Array
      var getRandomNumber = function (lengthOfArray) {
        return Math.floor(Math.random() * (lengthOfArray ));
      };
      // takes an array of images, and an option number to slice off begining images, if no number is given, then slice will be set to 0, creates a variable lastPictureNumber on the rootScope.
      var getImage = function(arrayOfImages, startSlice = 0) {
        var length = arrayOfImages.length - startSlice;
        var picture;
        var inner = function() {
          //getRandomNumber takes the length of an array, length is defined above
          var pictureNumber = getRandomNumber(length);
         //make sure we don't get the same picture twice
          while (pictureNumber === $rootScope.lastPictureNumber) {
            pictureNumber = getRandomNumber(length);
          }
          $rootScope.lastPictureNumber = pictureNumber;
          picture = arrayOfImages.slice(startSlice)[pictureNumber];
        };
        inner();
        return picture;
      };
      // create a random two digit addition number
      var randomTwoNumAdd = function(maxNum) {
        var randomNumber1 = Math.floor(Math.random() * maxNum);
        var randomNumber2 = Math.floor(Math.random() * maxNum);
        var answer = randomNumber1 + randomNumber2;

        return {
          none: randomNumber1,
          ntwo: randomNumber2,
          answer: answer
        };
      };
      //fetches user data from the database
      var getData = function(route) {
        return $http.post(route, {})
          .then(getDataComplete)
          .catch(getDataFailed);

        function getDataComplete(res) {
          return res.data;
        }

        function getDataFailed(err) {
          console.log(err);
        }
      };

      var setReward = function (rewardName, imageTag ) {
        $window.localStorage.reward = rewardName;
        $window.localStorage.rewardImage = imageTag;
      };

      var saveReward = function(medalName, levelName, points) {
        $http.post('/api/rewardmedal', {userid: JSON.parse($window.localStorage.profile).user_id, medal: medalName, level: levelName, points: points})
          .then(function(res) {
            $state.go('reward');
          });
      };

      return {
        getRandomNumber: getRandomNumber,
        getImage: getImage,
        randomTwoNumAdd: randomTwoNumAdd,
        getData: getData,
        setReward: setReward,
        saveReward: saveReward
      };

    }]);

})();
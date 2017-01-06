angular.module('easyismath')
  .factory('tools', ['$state', '$rootScope', '$http', '$sce', function($state, $rootScope, $http, $sce) {


    //returns a random number based upon the length of an array, the parameter takes the length of an Array
    var getRandomNumber = function (lengthOfArray) {
      return Math.floor(Math.random() * (lengthOfArray - 2))
    }

    // takes an array of images, and an option number to slice off begining images, if no number is given, then slice will be set to 0, creates a variable lastPictureNumber on the rootScope.
    var getImage = function(arrayOfImages, startSlice = 0) {
      var length = arrayOfImages.length;
      var picture;

      var inner = function() {
        //getRandomNumber takes the length of an array, length is defeined above
        var pictureNumber = getRandomNumber(length);
                //make sure we don't get the same picture twice
        while(pictureNumber === $rootScope.lastPictureNumber) {
          pictureNumber = getRandomNumber(length);
        }
        $rootScope.lastPictureNumber = pictureNumber;

         picture = arrayOfImages.slice(startSlice)[pictureNumber];
    }
    inner();
    return picture;
  }


    return {
      getRandomNumber: getRandomNumber,
      getImage: getImage
    }

}])
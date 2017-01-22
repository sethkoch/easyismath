
module.exports = {

  //data for grade 1 mission 2
  sendData: function(req, res) {
    res.json({

       images: ["<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2hotdog.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2pugalien.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2water.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2jumbo.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2thumbsup.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2thumbsdown.png' class='img-responsive' style='max-height:460px' />" ],

       text: ["I'm hot.  I'm thirsty! <br> I need water.  Will you help me get water?", "I met this alien.<br>  He will give me water, but I must help him. <br>  He cannot do addition.  <br>  Can you tell him the answers to the questions?  <br>  Do a good job, and he will give me all the water I need!", "I am the great pugania from the planet pushpa.  Answer 20 questions correctly and the dog will have all the water he needs.", "You did it!  Great job! <br>As I promised, <br> water!"],

       button: ["<button class='btn btn-info'>Yes</button>", "<button class='btn btn-info'>Let's Go!</button>", "<button class='btn btn-success'>Answer</button>", "<button class='btn btn-success'>Thank you</button>"]
     });
  }
}
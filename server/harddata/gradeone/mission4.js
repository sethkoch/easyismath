module.exports = {

  //data for grade 1 mission 2
  sendData: function(req, res) {
    res.json({

       images: ["<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-3/1-3lisa.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2pugalien.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2jumbo.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-3/1-3lisa.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-3/1-3happyface.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-3/1-3sadface.png' class='img-responsive' style='max-height:460px' />" ],

       text: ["My name is Lisa. <br> My familiy moved to a new town. <br> I am so lonely. I have no friends. <br> Will you help me find a friend?", "I'm back!", "The great Pugania speaks again!<br> Help me one more time, by adding for me. <br> If you do a good job, I will help Lisa find a friend.", "You did it!  Great job! <br>As I promised, <br> a friend for Lisa. Lisa meet Jumbo!"],

       button: ["<button class='btn btn-info'>Yes</button>", "<button class='btn btn-info'>Let's Go!</button>", "<button class='btn btn-success'>Answer</button>", "<button class='btn btn-success'>Thank you</button>"]
     });
  }
}
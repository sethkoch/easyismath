
module.exports = {

  //data for grade 1 mission 1
  sendData: function(req, res) {
    res.json({
      data:  ["<p>Will you save the penguins?</p>", "<p>A big monster wants to eat them all!</p>", "<p>Quick, how many penguins are there?</p>", "<p>Some caves are big, some caves are small.</p>", "<p>Can you help the penguins?</p>", "<p>Tell the penguins how many can go in each cave!</p>", "<p>Time to train!</p>"],

       images: ["<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1babypenguin.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1monster.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1fourpenguins.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1onepenguin.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1onepenguinpainter.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1oneswimmingpenguin.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1threekingpenguins.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1threepenguins.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1twelvepenguins.png' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1twopenguinbrothers.jpg' class='img-responsive' style='max-height:460px' />", "<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1twozoopenguins.jpg' class='img-responsive' style='max-height:460px' />"],

       questionAnswers: [4, 1, 1, 1, 3, 3, 12, 2, 2],

       buttonText: ["Yes!", "Ahhhhhh", "Answer"]
     });
  }
}

var bird;
var pipes = [];
var shouldStart = false;
var score = 0;
var stop = false;
function setup() {

  var canvas = createCanvas(900,500);
  canvas.parent('sketch-holder');
  //bird = new Bird();
  // var pipe = new Pipe();
  // pipes.push(pipe);
  bird = new Bird();

}

function reset() {
//  pipes = new Array[];
  bird = new Bird();
  //var pipe = new Pipe();
  score = 0;
  stop = false;
  pipes = []
  console.log("PIPES"+pipes);
  //pipes.push(pipe);
}

function draw() {
  background(0);

  if(shouldStart){
    for(var i = pipes.length - 1; i >= 0 ; i--) {


      if(pipes[i].hits(bird)){
        pipes[i].highlight = true;
        stop = true;
      }
      else {
        pipes[i].highlight = false;
      }

      if(pipes[i].offscreen()) {
        score++;
        pipes.splice(i,1)
      }

      pipes[i].show(score);
      pipes[i].update();

      if(stop) {
        pipes[i].speed = 0;
        bird.active = false;
        //noLoop();
      }
    }
    bird.show();
    bird.update();

    if(frameCount % 60 == 0) {
      var pipe = new Pipe();
      pipes.push(pipe);
    }

    console.log(pipes);
  }

}

function keyPressed() {
  if(!shouldStart) {
    shouldStart = true;
  }
  if(!stop) {
    if (key == ' ') {
      bird.up();
      console.log("SPACE");
  }
  }
}

function resetGame() {
  console.log("RESET PRESSED");
  //window.location.reload();
  //gameReset();
  document.getElementById('reset').blur();
  reset();
}

// funtion gameReset() {
//   pipes = [];
//   bird = new Bird();
//   var pipe = new Pipe();
//   pipes.push(pipe);
// }
function start() {
  console.log("START PRESSED");
   shouldStart = true;
}

function jump() {
  if(!shouldStart) {
    shouldStart = true;
  }
  bird.up();
}

window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

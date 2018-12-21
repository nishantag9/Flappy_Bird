var bird;
var pipes = [];
function setup() {

  var canvas = createCanvas(900,500);
  canvas.parent('sketch-holder');

  bird = new Bird();
  var pipe = new Pipe();
  pipes.push(pipe);
}

function draw() {
  background(0);
  for(var i = pipes.length - 1; i >= 0 ; i--) {
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)){
      pipes[i].highlight = true;
    }
    else {
      pipes[i].highlight = false;
    }

    if(pipes[i].offscreen()) {
      pipes.splice(i,1)
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

function keyPressed() {
    if (key == ' ') {
      bird.up();
      console.log("SPACE");
  }
}

function resetGame() {
  console.log("RESET PRESSED");
}

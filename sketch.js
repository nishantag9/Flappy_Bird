var bird;
var pipes = [];
function setup() {
  createCanvas(700,400);
  bird = new Bird();

  var pipe = new Pipe();
  pipes.push(pipe);
}

function draw() {
  // put drawing code here
  background(0);


  for(var i = 0; i < pipes.length ; i++) {
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)){
      pipes[i].highlight = true;
    }
    else {
      pipes[i].highlight = false;
    }

    if(pipes[i].offscreen()) {
      pipes.splice(0,1)
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


function Bird(){
    this.x = 50;
    this.y = height/2;
    this.velocity = 0;
    this.active = true;
    var gravity = 0.4;
    var lift = -9
    this.show = function() {

      stroke(255);
      fill(255);
      ellipse(this.x,this.y,20,20);
    }

    this.update = function() {
        if(this.active) {
          this.velocity += gravity;
          this.y += this.velocity;

          if(this.y > height){
            this.velocity = 0;
            this.y = height;
          }

          if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
          }
        }
      }

    this.up = function() {
      if(this.active) {
        this.velocity += lift;
      }
    }
}

let paint1, paint2, paint3, paint4, paint5;

function setup() {
  createCanvas(400, 400);
  noStroke();

  paint1 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint2 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint3 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint4 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint5 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
}

function draw() {
  // background(200);

  paint1.display();
  paint2.display();
  paint3.display();
  paint4.display();
  paint5.display();
}


function Paint(tempPaintColor, speed) {
  this.paintColor = tempPaintColor;
  this.paintXposition = random(width); 
  this.paintYposition = 0; 
  this.paintRadius = 50;
  this.speed = speed; 

  this.display = function() {

    if (this.paintYposition < height + this.paintRadius / 2) {
      fill(this.paintColor);
      circle(this.paintXposition, this.paintYposition, this.paintRadius);

      this.paintYposition += this.speed;
    }
  };
}

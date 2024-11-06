let paint1, paint2, paint3, paint4, paint5, paint6, paint7, paint8;
let img

function preload() {
  img = loadImage("me.png")
}

function setup() {
  createCanvas(800, 400);
  noStroke();

  image(img, 200, 140, 400, 250);

  paint1 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint2 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint3 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint4 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint5 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint6 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint7 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
  paint8 = new Paint(color(random(255), random(255), random(255)), random(1, 3));
}

function draw() {
  paint1.display();
  paint2.display();
  paint3.display();
  paint4.display();
  paint5.display();
  paint6.display();
  paint7.display();
  paint8.display();
}


function Paint(tempPaintColor, speed) {
  this.paintColor = tempPaintColor;
  this.paintXposition = random(width); 
  this.paintYposition = 0; 
  this.paintRadius = 35;
  this.speed = speed; 

  this.display = function() {

    if (this.paintYposition < height + this.paintRadius / 2) {
      fill(this.paintColor);
      circle(this.paintXposition, this.paintYposition, this.paintRadius);

      this.paintYposition += this.speed;
    }
  };
}

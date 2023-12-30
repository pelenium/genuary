var p = [];
let current = 1;
var colors = [new clr(33, 139, 130), new clr(182, 216, 242), new clr(238, 186, 178), new clr(190, 180, 197), new clr(242, 115, 72), new clr(55, 102, 126)]

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  frameRate(60);

  console.log(colors)
  p.push(new particle());
  current++;
}

function draw() {
  for (let i = 0; i < p.length; i++) {
    p[i].draw();
  }
  p.push(new particle());
  current++;
}

function clr(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}


function particle() {
  this.rad = current;
  this.angle = random(0, 360);
  this.delta = random(0.001, 0.007);

  this.x = this.rad * cos(this.angle);
  this.y = this.rad * sin(this.angle);

  this.c = round(random(1, 5))

  this.r = colors[this.c].r;
  this.g = colors[this.c].g;
  this.b = colors[this.c].b;

  this.update = function () {
    this.angle += this.delta;
    this.x = this.rad * cos(this.angle);
    this.y = this.rad * sin(this.angle);
  }

  this.draw = function () {
    this.update();
    fill(this.r, this.g, this.b)
    stroke(this.r, this.g, this.b)
    circle(this.x, this.y, 25)
  }
}

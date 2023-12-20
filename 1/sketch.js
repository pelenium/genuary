const w = 5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60)
  background(0)

}

function draw() {
  strokeWeight(5)
  createLines()
}

function createLines() {
  var x1 = random(-20, window.innerWidth * 2),
    y1 = random(-20, window.innerHeight);

  var x2 = x1 + random(5, 10) * 15,
    y2 = y1 + random(5, 10) * 20;

  var flag = round(random(0, 1));
  console.log(flag)
  if (flag != 0) {
    var x = x1;
    stroke(random(255), random(255), random(255))
    for (x; x <= x2; x += 10) {

      line(x, y1, x, y2)
    }
  } else {
    var y = y1;
    stroke(random(255), random(255), random(255))
    for (y; y <= y2; y += 10) {
      line(x1, y, x2, y)
    }
  }
}

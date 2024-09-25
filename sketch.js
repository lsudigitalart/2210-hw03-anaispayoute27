function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(248, 131, 121);
  for (var y = 0; y <= height; y += 10) {
    for (var x = 0; x <= width; x += 10) {
    fill(x, x, x);
    ellipse(x, y, mouseX, 10);
    }
  }
}

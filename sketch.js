let points = [];
let maxDistance = 100; // max distance to connect points

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 10, 30); // dark background
  stroke(0, 200, 255, 150); // neon blue lines
  strokeWeight(1.5);
  noFill();
}

function draw() {
  background(10, 10, 30, 20); // subtle fade for glow effect

  // draw all connections
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let d = dist(points[i].x, points[i].y, points[j].x, points[j].y);
      if (d < maxDistance) {
        stroke(0, 200, 255, map(d, 0, maxDistance, 255, 0));
        line(points[i].x, points[i].y, points[j].x, points[j].y);
      }
    }
  }

  // draw points
  for (let p of points) {
    stroke(0, 255, 255, 200);
    point(p.x, p.y);
  }
}

function mousePressed() {
  points.push(createVector(mouseX, mouseY));
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    points = [];
    background(10, 10, 30);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

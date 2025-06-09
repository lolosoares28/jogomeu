function setup() {
  createCanvas(800, 400);
  noStroke();
}

function draw() {
  background(135, 206, 235); // Céu azul

  drawSun();
  drawMountains();
  drawGrass();
  drawTrees();
  drawCow(frameCount % width);
}

function drawSun() {
  fill(255, 204, 0);
  ellipse(100, 80, 80, 80);
}

function drawMountains() {
  fill(100, 155, 100);
  triangle(200, 300, 350, 100, 500, 300);
  triangle(0, 300, 150, 120, 300, 300);
}

function drawGrass() {
  fill(34, 139, 34);
  rect(0, 300, width, 100);
}

function drawTrees() {
  for (let x = 50; x < width; x += 150) {
    fill(139, 69, 19); // tronco
    rect(x, 250, 20, 50);
    fill(34, 139, 34); // copa
    ellipse(x + 10, 240, 60, 60);
  }
}

function drawCow(x) {
  // Corpo
  fill(255);
  rect(x, 320, 60, 30);
  // Cabeça
  rect(x + 60, 325, 20, 20);
  // Pernas
  rect(x + 5, 350, 5, 10);
  rect(x + 20, 350, 5, 10);
  rect(x + 40, 350, 5, 10);
  rect(x + 55, 350, 5, 10);
  // Mancha preta
  fill(0);
  ellipse(x + 20, 335, 15, 15);
}

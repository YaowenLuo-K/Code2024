function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 0);
  //frameRate(5);
}


function draw() {
  //stroke(255);
  background(0, 0, 0, 25);
  //noStroke();
  //fill(mouseX, mouseY-255, mouseX-510);
  //circle(mouseX, mouseY, 100);
  
  //fill(0, 0, 300, 75);
  //circle(width/2, height/2, 300);
  //circle(0.3*width, 0.8*height, 200);
  
  //ellipse(0.75*width, 400, 100, 300);
  //line(0, 0, mouseX, mouseY);
  strokeWeight(1);
  text('HELLO WORLD!', mouseX, mouseY)
  stroke(255);
  textSize(200);
  fill(255);
  push();
  rect(500, 500, 100, 300);
  
  //line(0, 0, width, height);
  //line(pmouseX, pmouseY, mouseX, mouseY);
}

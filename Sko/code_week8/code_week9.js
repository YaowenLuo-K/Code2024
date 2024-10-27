var wigglyLetters=[];
var size=32;
var speed=1;
var letter, rand, xposition, yposition;
let customFont;

function preload() {
  customFont = loadFont('data/Gwendolyn-Regular.ttf'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(120);
  textFont(customFont); 
}

function draw() {
  background(0, 230, 230);
  fill(255, 255, 255);
  noStroke();
  for (let i = 0; i < wigglyLetters.length; i++) {
    wigglyLetters[i].giggle();
    wigglyLetters[i].display();
  }
}

function mousePressed() {
  rand = int(random(65, 160));
  letter = char(rand);
  wigglyLetters.push(new Wiggle(mouseX, mouseY, size, letter, speed));
}

class Wiggle {
  constructor(x, y, size, letter, speed) {
    this.x = x;
    this.y = y;
    this.textSize = size;
    this.speed = speed;
    this.letter = letter;
  }

  giggle() {
    this.x += random(-4, 4);
    this.y += random(-4, 4);
    this.textSize += random(-2, 2); 
  }

  display() {
    textSize(this.textSize);
    text(this.letter, this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
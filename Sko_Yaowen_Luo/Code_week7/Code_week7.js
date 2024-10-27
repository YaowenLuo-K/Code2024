var pic;

function preload(){
  pic = loadImage("data/cross.jpg"); //this will need to be YOUR IMAGE FILENAME!
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("DeepSkyBlue");
  imageMode(CENTER, CENTER);
}

function draw(){
  image(pic, width/2, height/2, 100, 100);
  button = createButton('click me');
button.position(width/2, height/2);
let buttons=[];
  for (i=0; i<100; i++){
    buttons[i]=createButton('click me');
    buttons[i].position(random(width), random(height));
  }
}

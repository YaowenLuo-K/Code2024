var song, mic, speed, volume;
function preload(){
  song=loadSound("data/chinese-beat-190047.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,0);
  getAudioContext().suspend();
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  background(255, 0, 0);
  volume = mic.getLevel();
  circleDiameter= map(volume, 0.0, 1.0, 50, 500);
  //let circleDiameter= map(mouseY, 0, 2*height, 1, 400);
  circle(mouseX, mouseY, circleDiameter);
 
  //volume= map(mouseX, 0, width, 0.0, 1.0);
  //speed= map(mouseY, 0, height, 0.01, 10);
  //song.amp(volumes);
  //song.amp(speed);
  
}

function mousePressed(){
  if (getAudioContext().state !== 'running'){
    getAudioContext().resume();
    song.play();
    song.loop();
  }
}
function keyTyped(){
  if(key === " "){
  song.stop();}
  else{
    song.play();
  }
}

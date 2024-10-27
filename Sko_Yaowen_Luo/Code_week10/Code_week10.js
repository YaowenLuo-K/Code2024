let message = "Hey, isn't it time for an upgrade?";
let index = 0; 
let lastMillis = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(25); 
  background(0, 0, 255);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER); 

}

function draw() {
  background(0, 0, 255); 
  text(message.substring(0, index), width / 2, height / 2); 
  
  let currentTime = millis(); 
  if (currentTime > lastMillis + 50) { 
    if (index < message.length) { 
      index++; 
    }
    lastMillis = currentTime; 
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(135, 206, 250);
}

function draw() {
  //back hair
   fill(0,0,0);  
   ellipse(0.5*width, 0.45*height, 320,300); 
   ellipse(0.6*width, 0.55*height, 120,120); 
   ellipse(0.4*width, 0.55*height, 120,120); 
   
   //head
   strokeWeight(3);
   fill(255,225,204);
   circle(width/2, height/2, 300);
   
   //eyes
   //left eye
   push();
   fill(255,225,255);
   rotate(0.32*QUARTER_PI);
        ellipse(0.485*width,0.24*height,120,140);
   fill(255,192,203);
   strokeWeight(0);
       ellipse(0.49*width,0.24*height,100,120);
   fill(0,0,0);     
        ellipse(0.495*width,0.24*height,80,100);
   fill(255,255,255);
        circle(0.5*width,0.215*height,40);//eye light
   pop();
   //right eye
   push();
   fill(255,225,255);
        rotate(-0.32*QUARTER_PI);
        ellipse(0.485*width,0.76*height,120,140);
   fill(255,192,203);
   strokeWeight(0);
        ellipse(0.48*width,0.76*height,100,120);  
   fill(0,0,0);     
        ellipse(0.475*width,0.76*height,80,100);
   fill(255,255,255);
        circle(0.47*width,0.735*height,40);//eye light
   pop();
   
   //mouth
   //fill(255,0,128);
   push();
   arc(0.5*width,0.59*height, 25 * 2, 25 * 2, 0, PI);
   pop();
  
   //front hair
   push();
   fill(0,0,0);
   rect(0.405*width,0.28*height, 280, 90)
   //arc(width/2, height/2, 150 * 2, 120 * 2, 0, PI);
   pop();    
   
}

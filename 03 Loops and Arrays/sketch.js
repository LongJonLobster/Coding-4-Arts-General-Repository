let canvaSize=400;
let circleMaxSize=200;
let rectHeight=200;
let rectWidth=100;

let scrollIndex=canvaSize/2
let scrollIndexOnClick=scrollIndex;
let mouseYOnClick=0;
let mouseClickDetector=true;

function setup() {
  createCanvas(canvaSize, canvaSize);
}

function draw() {
  background(220);

  
  fill(255);
  stroke(0);
  for(let i=0; i<-1*scrollIndex/rectHeight+3; i++) {
    
    rect(canvaSize/2 - rectWidth/2, (scrollIndex + (rectHeight*i)) -rectHeight/2, rectWidth, rectHeight);
  }

  text(scrollIndex, 0, 10)


  
  if(mouseIsPressed){
    fill(0);
    stroke(170);
    if(mouseClickDetector){
      mouseYOnClick=mouseY;
      scrollIndexOnClick=scrollIndex;
      mouseClickDetector=false;
    }
    scrollIndex=scrollIndexOnClick+(mouseY-mouseYOnClick)
  }else{
    fill(255);
    stroke(0);
    mouseClickDetector=true;
  }
  
  for(let i=1; i<=100; i++) {
    circle(lerp(canvaSize, mouseX, i/100), lerp(canvaSize, mouseY, i/100), circleMaxSize-i*circleMaxSize/100);
  }
}
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
  // allows for you to scrol down infinitely without having to set the for loop break condition to something silly like
  // "break if i<100000000000000000000000000000"
  // doesn't unload the ones you scroll past tho.
  for(let i=0; i<-1*scrollIndex/rectHeight+3; i++) {
    
    // just making sure they dont overlap and go down one rectHeights' worth each time the loop iterates
    rect(canvaSize/2 - rectWidth/2, (scrollIndex + (rectHeight*i)) -rectHeight/2, rectWidth, rectHeight);
  }

 // scroll counter!
  text(scrollIndex, 0, 10)


  // a script that allows me to do stuff both on every frame the mouse is held down/isnt, and also
  // to do stuff on specifically the first frame the mouse is clicked and none after that until its released
  if(mouseIsPressed){
    fill(0);
    stroke(170);
    if(mouseClickDetector){
      mouseYOnClick=mouseY;
      scrollIndexOnClick=scrollIndex;
      mouseClickDetector=false;
    }
    // takes the difference between the current mouseY and the mouseY when the mouse was originally clicked and held
    // and uses that plus the scroll index when the mouse was first clicked to cleanly scroll down without any
    // shennanigans being caused by repeating this instruction every frame
    scrollIndex=scrollIndexOnClick+(mouseY-mouseYOnClick)
  }else{
    fill(255);
    stroke(0);
    mouseClickDetector=true;
  }
  
  // summons an army of interpolated circles to be the "finger" scrolling down
  for(let i=1; i<=100; i++) {
    circle(lerp(canvaSize, mouseX, i/100), lerp(canvaSize, mouseY, i/100), circleMaxSize-i*circleMaxSize/100);
  }
}
let canvasX=400;
let canvasY=400;

let coordinateX=50;
let coordinateY=50;

let kneecapSpeed=500;


let xMult=1;
let yMult=1;

function setup() {
  createCanvas(canvasX, canvasY);

  colorMode(HSB);
}

function draw() {
  //goofy aha
  background(coordinateY, coordinateX, mouseX + mouseY);

  // this checks if the coordinate of the bouncy text is smaller than 0 (west/north edge) or higher than the canvas width(east/south edge).
  // basically collision detector.
  // negates the xMult/yMult variable if the text is out of bounds
  // xMult is a variable that determines whether the velocity of the text is positive/negative
  // most compact way of doing this methinks. alternative methods with booleans would be longer
  
  if(coordinateX>=canvasX || coordinateX<=0) {
    xMult*=-1;
  }
  coordinateX+=((mouseX*deltaTime)/kneecapSpeed)*xMult;
  
  // takes the mouses coordinate and adds it to the texts position every frame
  // multiplied by deltatime to remove its dependancy on frame rate
  // speed is then kneecapped because its really fast otherwise
  

  // NOTE: right now this could be a little bit buggy, as if the velocity gets fast enough and clips it outside bounds, it would freak out and keep reversing the mult instead of flipping it once and leaving it.
  //could fix this with the following:
  //if(coordinateY>=canvasY) {
  //  yMult=-1;
  //}else if(coordinateY<=0){
  //  xMult= 1;
  //}
  //coordinateY+=((mouseY*deltaTime)/kneecapSpeed)*yMult;
  
  if(coordinateY>=canvasY || coordinateY<=0) {
    yMult*=-1;
  }
  coordinateY+=((mouseY*deltaTime)/kneecapSpeed)*yMult;
  
  
  text(mouseX + ", " + mouseY, coordinateX, coordinateY);

  text("Very intuitive color picker!", 0,10);
}
let canvaSizeX=400;
let canvaSizeY=400;

let dumpImg;
let curtImg;

let mouseToEdgePoint;

function preload() {
  dumpImg=loadImage("harumpty.png");
  curtImg=loadImage("curdain.jpg");
}

function setup() {
  createCanvas(canvaSizeX, canvaSizeY);
}

function draw() {
  background(220);

  image(dumpImg, 0, 0, canvaSizeX, canvaSizeY);

  image(curtImg, 0, 0, canvaSizeX, canvaSizeY);

  line(canvaSizeX/2, canvaSizeY/2, mouseX, mouseY);
}

// function setup() {
//   createCanvas(canvaSizeX, canvaSizeY, WEBGL);
  
//   describe('A silhouette of a rotating torus colored with a gradient from cyan to purple.');
// }

// function draw() {
//   background(200);

//   // Create a mask.
//   clip(mask);

//   //Draw a backing shape.
//   noStroke();
//   beginShape(QUAD_STRIP);
//   fill(0, 255, 255);
//   vertex(-width / 2, -height / 2);
//   vertex(width / 2, -height / 2);
//   fill(100, 0, 100);
//   vertex(-width / 2, height / 2);
//   vertex(width / 2, height / 2);
//   endShape();
//   // image(img, 0, 0, canvaSizeX, canvaSizeY);
// }

// // Declare a function that defines the mask.
// function mask() {
//   push();
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   scale(0.5);
//   torus(30, 15);
//   pop();
// }
let canvaSizeX=400;
let canvaSizeY=400;

let dumpImg;
let curtImg;
let explodeGif;
let badSound;
let soundPlayed=false;

let scrollIndex=canvaSizeY;
let mouseClickDetector=true;
let scrollIndexOnClick;

function preload() {
  dumpImg=loadImage("harumpty.png");
  curtImg=loadImage("curdain.jpg");
  // originally I thought I would have to implement this skull gif like it was a video but turns out
  // gifs can just be used like images
  //explodeGif=createVideo("eplosion.gif")
  explodeGif=loadImage("eploder.gif");
  badSound=loadSound("bad-to-the-bone.mp3")
}

function setup() {
  createCanvas(canvaSizeX, canvaSizeY);

  //explodeGif.hide();
  //explodeGif.play();
}

function draw() {
  background(dumpImg);

  // copied from 03 loops
  if(mouseIsPressed){
    if(mouseClickDetector){
      mouseYOnClick=mouseY;
      scrollIndexOnClick=scrollIndex;
      mouseClickDetector=false;
    }
    // constrained to prevent you from continiuously scrolling down and down, borking the scrollindex and making it way too big
    // originally used abs() to prevent scroll index from going negative which kinda messes up the image coordinates but that still happened if you got it to zero exactly
    // now I use that decimal instead of zero and that did it really wish js had an epsilon value cause I think that would fix it but I'll put in a really small decimal instead. Same effect but less fancy and concise
    scrollIndex=constrain(scrollIndexOnClick+(mouseY-mouseYOnClick), 0.000000000000000001, canvaSizeY);


// check here to make sure the sound doesnt play every frame you're holdin the mouse
  if(!soundPlayed && scrollIndex<=canvaSizeY/2) {
    badSound.play();
    soundPlayed=true;
  }

  }else{
    mouseClickDetector=true;
    soundPlayed=false;
  }

  

  // remnant of me attempting to use a mask to do this. It worked fine, but was a bit finicky with the background
  // image refusing to un-render, even when the mask was pulled back up to cull it again.

  // beginClip();

  // noStroke();
  // fill(255);
  // beginShape();
  // vertex(0, canvaSizeY);
  // vertex(canvaSizeX, canvaSizeY);
  // vertex(canvaSizeX, mouseY)
  // vertex(0, mouseY);
  // endShape();

  // endClip();

  image(explodeGif, 0, 0, 100, 100);

  image(curtImg, 0, 0, canvaSizeX, scrollIndex);
  //image(dumpImg, 0, 0, canvaSizeX, canvaSizeY);
}

//function mouseClicked() {
  //explodeGif.loop(0.2);
//}
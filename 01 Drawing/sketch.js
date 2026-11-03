function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(220);

  // shadow
  // middle circle
  strokeWeight(2);
  stroke(200, 0, 0);
  fill(200, 0, 0);
  ellipse(200, 200, 90, 110);

  // left circle
  ellipse(170, 200, 80, 100);

  // right circle
  ellipse(230, 200, 80, 100);

  // stalk
  rect(185, 130, 30, 40);



  // color
  // middle circle
  stroke(0,0, 0);
  fill(0, 0, 0);
  ellipse(200, 200, 80, 100);

  // left circle
  ellipse(170, 200, 70, 90);

  // right circle
  ellipse(230, 200, 70, 90);

  //stalk
  rect(190, 135, 20, 30);

  // eyes
  stroke(200, 0, 0);
  fill(200, 0, 0);
  // L. eye
  ellipse(170, 190, 33, 35);
  // R. eye
  ellipse(230, 190, 35, 35);


  // sclera
  stroke(255, 255, 255);
  fill(255, 255, 255);
  // L. eye sclera
  ellipse(170, 190, 28, 30);
  // R. eye sclera
  ellipse(230, 190, 30, 30);

  // pupils
  stroke(0, 0, 0);
  fill(0, 0, 0);
  // L. eye sclera
  ellipse(170, 195, 12, 20);
  // R. eye sclera
  ellipse(230, 195, 12, 20);

  // eyelids
  rect(150, 195, 40, 30);
  rect(210, 195, 40, 30);

  // your taking too too
  stroke(200, 0, 0);
  fill(0, 0, 0);

  // eyelids
  line(154, 195, 186, 195);
  line(214, 195, 246, 195);

  beginShape();
  vertex(140, 195);
  vertex(165, 210);
  vertex(180, 210);
  vertex(185, 225);
  vertex(187, 215);
  vertex(230, 214);
  vertex(230, 210);
  vertex(250, 211);
  vertex(260, 195);
  vertex(250, 212);
  vertex(246, 212);
  vertex(246, 220);
  vertex(235, 230);
  vertex(225, 227);
  vertex(225, 227);
  vertex(225, 235);
  vertex(180, 237);
  vertex(178, 230);
  vertex(175, 231);
  vertex(170, 230);
  vertex(150, 200);
  endShape(CLOSE);
}
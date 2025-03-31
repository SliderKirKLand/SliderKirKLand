let cx,xy;
let bgc;
let gridSize;
let bot;
let counterG = 0;
let counterR = 0;

function preload() {
  // set up a assets folder then add an image.
  bot = loadImage("assets/astro_sleep.gif")
  bot1 = loadImage("assets/astro_dance.gif")
  bot2 = loadImage("assets/astro_angry.gif")
  bot3 = loadImage("assets/astro_jump.gif")
  f = loadFont('assets/AGRESSIVE.otf');
}

function setup() {
    createCanvas(800, 800);
    background(0);
    bgc = color(20,1);
    cx = width/2;
    cy = height/2;
    gridSize = 100;
    textSize(40);
    textFont(f);

    counterR = height;
}

function draw() {
  if( keyIsPressed) { 
    keyChoice();
 }
 words()
}


function words(){
  switch(key){
    case 't':
  console.log("t text");  // text
  textSize((counterR)/10);
  textAlign(CENTER);
  fill('#e8853f');
  text("SUPER SYSTEM ", width/2, counterR);
  counterR-=75;
  if (counterR < -50) {
    counterR = height;
  }
  break;

case 'r':
  console.log("r text");  // text
  textSize((counterG+50)/3);
  textAlign(CENTER);
  fill('#db1a1a');
  text("INTEL", width/2, counterG);

  counterG +=95;
    if (counterG > width) {
      counterG = -50;
    }
  break;
  }
}


function keyChoice() {
// the 'key' maps what characters on the keyboard you can use.
// switch statment
switch(key) {
case 'a':
console.log("a left");  // left
cx+= -gridSize;
image(bot,cx,cy,gridSize,gridSize);
break;
case 'w':
console.log("w up");  // up
cy+= -gridSize; 
image(bot1,cx,cy,gridSize,gridSize);
break;
case 'd':
console.log("d  right");  //right
cx+= gridSize;
image(bot2,cx,cy,gridSize,gridSize);
break;
case 's':
console.log("s back");  // back
cy+= gridSize;
image(bot3,cx,cy,gridSize,gridSize);
break;

default:             // Default executes if the case labels
console.log("None");   // don't match the switch parameter
break;
}
key = "";  // you can empty it so, it does not double trigger

}
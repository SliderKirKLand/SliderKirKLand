let ghost;


function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  rectMode(CENTER);

  ghost = new Ghost (0,0);
}

function draw() {

  let r = random(30);
  let m = mouseX;
  let m1 = mouseY;
  let n = height - m1 - m - random(255);

  let bitSize = PI/16;
  let startAngle = bitSize * sin(frameCount * 0.2) + bitSize;
  let endAngle = TWO_PI - startAngle;
  
  if (m > 250){
    console.log("GET SCARED!!!");
  } else {
    console.log(m);
  }

  if (m < width/2)  {
    background(m);
    //ellipse(m, height/2, r * 5, r * 2);
    noStroke();
    fill('white');
    //rotateY(frameCount * 0.01);
    shakyBalls();
    fill("yellow");
    arc(m, height/2, 100, 100, startAngle, endAngle, PIE);
  } else {
    background(n);
    ghost.x=m + r;
    ghost.y=height/2 + r;
    //Displaying the ghost class
    ghost.display();
  }


}

function shakyBalls(){
  let m=mouseY;
  let r = random(25);
  for (let i = 0; i < mouseX; i += 5) {
    ellipse(m+100,height/2,r * 1,r * 1);
    ellipse(m+170,height/2,r *1, r * 1);
    ellipse(m+240,height/2,r * 1,r * 1);
    r++;
  }

}

class Ghost {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    noStroke();
    fill("red");
    rect(this.x - 0, this.y + 10, 49, 30); //bottom half of ghost
    ellipse(this.x, this.y, 50, 50); //top half of ghost
    fill("white"); //eye whites
    ellipse(this.x - 10, this.y - 5, 15, 15);
    ellipse(this.x + 10, this.y - 5, 15, 15);
    fill("blue"); //blue part of eyes
    ellipse(this.x + 10, this.y - 5, 10, 10);
    ellipse(this.x - 10, this.y - 5, 10, 10);
    //bottom triangles (ghost "legs")
    fill(0);
    triangleMove(this.x - 25, this.y + 25.5);
    triangleMove(this.x - 5, this.y + 25.5);
  }
}

function triangleMove(x,y){
  triangle(x, y, x + 15, y - 10, x +30, y);
}

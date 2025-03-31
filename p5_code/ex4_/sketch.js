let ant = [];
let numAnt = 100; // Change the number of ant
let cheeses = [];
let bg;

function setup() {
  createCanvas(900, 600);
  // Create and initialize the Ant objects
  for (let i = 0; i < numAnt; i++) {
    let col = color(50, 0, 0); // Dark brownish color for ant
    let xpos = random(width);
    let ypos = random(height);
    ant.push(new Ant(col, xpos, ypos));
  }

  // Create cheese instances
  // This follow (xPOS, yPOS, x ,y)
  cheeses.push(new Cheese(0, 100, 80, 40));
  cheeses.push(new Cheese(random(0,800), 250, 80, 50));
  cheeses.push(new Cheese(500, 500, 70, 45));

  cursor("assets/spray_can.png");
  bg = loadImage('assets/background.jpg');
}

function draw() {
    background(bg);

    // Display all cheeses
    for (let cheese of cheeses) {
      cheese.drag(mouseX, mouseY);  // Update position if dragging
      cheese.display();
    }
  
    // Update and display all ant
    for (let i = 0; i < numAnt; i++) {
      ant[i].move();
      ant[i].display();
    }
}

function mousePressed() {
    for (let cheese of cheeses) {
      if (cheese.contains(mouseX, mouseY)) {
        cheese.isDragging = true;
      }
    }
  
    cursor('grab');  // Change the cursor back to default arrow on mouse press
  }
  
  function mouseReleased() {
    for (let cheese of cheeses) {
      cheese.isDragging = false;
    }
  cursor("assets/spray_can.png");
}

function keyPressed() {
  if (key === 'P' || key === 'p') {
      // Get two random unique indexes
      let firstIndex = floor(random(ant.length));
      let secondIndex = floor(random(ant.length));
      while (firstIndex === secondIndex) {
          secondIndex = floor(random(ant.length));
      }

      // Set these two ant to be big
      ant[firstIndex].size = 100;  // Double the default size
      ant[firstIndex].legLength = 40;  // Double the default leg length

      ant[secondIndex].size = 100;  // Double the default size
      ant[secondIndex].legLength = 40;  // Double the default leg length
  }
  if (key === 'R' || key === 'r') {
    for (let Ant of ant) {
        Ant.shouldRotate = !Ant.shouldRotate;  // Toggle rotation state
    }
    }
}

class Ant {
  c;
  xpos;
  ypos;
  speed;
  rotation = 0; 
  rotating = false;

  constructor(tempC, tempXpos, tempYpos) {
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.speed = 3; // Change how fast the ant will go
    
    let randomBias = pow(random(), 2);
    this.sizeWidth = map(randomBias, 0, 1, 30, 10); // Size range of 1st number to 2nd number for width
    this.sizeHeight = this.sizeWidth / 2.5;  // Maintain the aspect ratio

    this.zoomer = random(1) < 0.1;  // 10% chance to be a zoomer
    this.zoomSpeed = this.zoomer ? random(8, 15) : this.speed; // Zoomers have a random speed between 8 and 15
    this.c = this.zoomer ? color(0, 153, 0) : tempC; // If it's a zoomer, set color to red. Otherwise, use the provided color.
    
    this.size = 20;  // Default size for a regular Ant
    this.legLength = 12;  // Default leg length for a regular Ant

    this.shouldRotate = false;
  }


  move() {
    let dirX = mouseX - this.xpos;
    let dirY = mouseY - this.ypos;
    let distance = dist(this.xpos, this.ypos, mouseX, mouseY);
    
    if (this.zoomer) {
        let choice = floor(random(4));
        switch (choice) {
            case 0: this.xpos += this.zoomSpeed; break;
            case 1: this.xpos -= this.zoomSpeed; break;
            case 2: this.ypos -= this.zoomSpeed; break;
            case 3: this.ypos += this.zoomSpeed; break;
        }
    } else if (distance < 200) {
        let len = sqrt(dirX * dirX + dirY * dirY);
        if (len !== 0) {  // Avoid division by zero
            dirX /= len;
            dirY /= len;
        }

        this.xpos -= dirX * this.speed;
        this.ypos -= dirY * this.speed;
    } else {
        let choice = floor(random(4));
        switch (choice) {
            case 0: this.xpos += this.speed; break;
            case 1: this.xpos -= this.speed; break;
            case 2: this.ypos -= this.speed; break;
            case 3: this.ypos += this.speed; break;
        }
    }
    if (this.shouldRotate) {
      this.rotation += 0.05;  // Adjust this value for faster/slower rotation
    }

    this.xpos = constrain(this.xpos, 0, width);
    this.ypos = constrain(this.ypos, 0, height);
    this.updateRotation();
}

updateRotation() {
  if (this.rotating) {
      this.rotation += 0.05; // Adjust this value to control the speed of the rotation
  }
}

display() { 
  push(); 

  translate(this.xpos, this.ypos);
  rotate(this.rotation)
  
  noStroke();
  fill(this.c);
  //ellipse(this.xpos, this.ypos, this.sizeWidth, this.sizeHeight);
  ellipse(0, 0, this.sizeWidth, this.sizeHeight);
  //ellipse(this.xpos, this.ypos, this.size, this.size / 2);  // Use this.size
  ellipse(0, 0, this.size, this.size / 2);
  let legOffset = this.sizeWidth / 20;

  if (this.zoomer) {
      stroke(0, 153, 0);  // If zoomer, set leg color to red
  } else {
      stroke(50, 0, 0);  // Original dark brownish color for non-zoomers
  }
  
  strokeWeight(1);
  // BIG Left Side Legs
  line(-this.size * 0.4, 0, -this.size * 0.55, this.legLength);
  line(-this.size * 0.3, 0, -this.size * 0.45, this.legLength);
  line(-this.size * 0.15, 0, -this.size * 0.3, this.legLength);
  
  // BIG Right Side Legs
  line(this.size * 0.4, 0, this.size * 0.55, this.legLength);
  line(this.size * 0.3, 0, this.size * 0.45, this.legLength);
  line(this.size * 0.15, 0, this.size * 0.3, this.legLength);
  // Adjust based on this.size and this.legLength
  
  line(-8, 0, -11, 7);
  line(-6, 0, -9, 9);
  line(-3, 0, -6, 12);

  line(8, 0, 11, 7);
  line(6, 0, 9, 9);
  line(3, 0, 6, 12);
pop();
}

}

class Cheese {
  x;
  y;
  width;
  height;
  isDragging = false;
  rotation = 0;

  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sizeWidth = random(10, 30); // Size range of 10 to 30 for width
    this.sizeHeight = this.sizeWidth / 2; // Maintain the aspect ratio

  }
  // Check if a point is inside the cheese
  contains(px, py) {
    return px > this.x && px < this.x + this.width && py > this.y && py < this.y + this.height;
  }

  // Update position for dragging
  drag(px, py) {
    if (this.isDragging) {
      this.x = px - this.width / 2;
      this.y = py - this.height / 2;
    }
  }

  display() {
    push();
    fill(255, 204, 0);
    //noStroke();
    strokeWeight(3);
    stroke(0);
    triangle(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height);
    pop();

    push();
    fill(255,154,50);
    strokeWeight(3);
    stroke(255, 204, 0);
    ellipse(this.x + 10, this.y + 10, 10, 10);
    ellipse(this.x + 30, this.y + 20, 12, 12);
    ellipse(this.x + 5, this.y + 25, 8, 8);
    pop();
  }
}
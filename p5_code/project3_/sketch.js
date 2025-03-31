let bgc;
let battery;
let toggle = true;
let timeSpeed = 10000; 


function preload () {
  battery = loadImage("image/battery.png")
}

function setup() {
  createCanvas(950, 350);
  angleMode(DEGREES);
  bgc = color(0);
}

function draw() {

  // let realMillis = millis() * timeSpeed; // Adjust time with multiplier
  // let h = floor((realMillis / (3600000)) % 24); // Calculate hours (0–23)
  // let m = floor((realMillis / 60000) % 60); // Calculate minutes (0–59)
  // let s = floor((realMillis / 1000) % 60); // Calculate seconds (0–59)
  let h = hour(); // Current hour (0–23)
  let m = minute(); // Current minute (0–59)
  let s = second(); // Current second (0–59)
  let millisFraction = millis() % 1000 / 1000; // Fraction of a second

  // Map values to blocks
  let hourBlock = map(h, 0, 23, 0, width - 705);
  let minuteBlock = map(m, 0, 59, 0, width - 650);
  let secondBlock = map(s, 0, 59, 0, width - 860);
  let miliBlock = map(millisFraction, 0, 1, 0, width - 860);;
  let phaseBlock = map(h % 6 + m / 60, 0, 6, 0, 70);// Daily phase progress
  
  
  // Detect Morning, Afternoon, Evening, and Night
  let isMorning = h >= 0 && h < 6; //0-6 AM
  let isAfternoon = h >= 6 && h < 12;//6 AM -12 PM
  let isEvening = h >= 12 && h < 18;//12-6PM
  let isNight = h >= 18 && h < 24;//6PM-12AM

  // Detect Traffic Jam Times
  let isJamMorning = h >= 8 && h < 10; // 8–10 AM
  let isJamAfternoon = h >= 15 && h < 18; // 3–6 PM
  let isJam = isJamMorning || isJamAfternoon; // Combine both time ranges

  // Background Transition Logic
  let morningColor = color(30, 30, 30, 220); 
  let afternoonColor = color(60, 60, 60, 220); 
  let nightColor = color(0); 

  if (h >= 0 && h < 6) {
    // Morning: Blend from black to morningColor
    bgc = lerpColor(nightColor, morningColor, map(h + m / 60, 0, 6, 0, 1));
  } else if (h >= 6 && h < 12) {
    // Afternoon: Blend from morningColor to afternoonColor
    bgc = lerpColor(morningColor, afternoonColor, map(h + m / 60 - 6, 0, 6, 0, 1));
  } else {
    // Evening/Night: Reset to black
    bgc = nightColor;
  }

  background(bgc);

  push();
  translate(-17,-95);

// Battery meter with static black stripes
  push();
  fill(167, 211, 197, 255); // Actual bar color
  noStroke();
  if (isEvening || isNight) applyGlow(color(167, 212, 197, 200)); // Glow effect
  rect(70, height - -2 - phaseBlock, 70, phaseBlock); // Filled bar

  // Add black horizontal stripes
  let stripeSpacing = 10; // Spacing between stripes
  for (let y = 290; y < 265 + 90; y += stripeSpacing) { // Fixed position within the battery meter
    fill(0); // Black color for stripes
    rect(70, y, 70, 2); // Stripe height is 2px
  }

  let phases = ["Morning", "Afternoon", "Evening", "Night"];
  let currentPhase = floor(h / 6); // 0: Morning, 1: Afternoon, etc.
  fill(148,188,176,255);
  textSize(20);
  text(phases[currentPhase], 105, 245); // Label the current phase
  pop();
  
  //battery image
  image(battery,70,265,70,90);

  // Draw CHG second bar with gray outline
  push();
  if (isEvening || isNight) applyGlow(color(167, 212, 197, 200)); // Glow effect
  drawRectFill(180, 330, miliBlock, 20, -0.2, -0.2, color(167,211,197,255));
  drawRect(178.5, 330, 90, 20, -0.2, -0.2, color(101,125,117,255), 4); // outline
  pop();

  // Draw minute bar with gray outline
  push();
  if (isEvening || isNight) applyGlow(color(167, 212, 197, 200)); // Glow effect
  if (minuteBlock > 0) {
    drawRectFill1(272, 300, minuteBlock, 50, 0, 10, color(94, 167, 109, 255));
  }
  drawRect(271, 300, 300, 50, 0, -0.2, color(101,125,117,255), 4); // outline
  pop();

  // Draw hour bar with gray outline
  push();
  if (isEvening || isNight) applyGlow(color(167, 212, 197, 200)); // Glow effect
  drawRect(572, 300, 245, 50, -0.2, 0, color(101,125,117,255),4); // Gray outline
  if (hourBlock > 0) {
    drawRectFill1(572, 300, hourBlock, 50, 10, 0, color(167, 212, 197, 255));
  }
  pop();

  // Draw PWR second bar with gray outline
  push();
  if (isEvening || isNight) applyGlow(color(167, 212, 197, 200)); // Glow effect
  drawRect(825, 300, 90, 20, -0.2, -0.2, color(101,125,117,255),4); //  outline
  drawRectFill(827, 300, secondBlock, 20, -0.2, -0.2, color(151,62,55)); // Filled bar
  pop();

  ///
  push();
  if (isEvening || isNight) applyGlow(color(167, 212, 197, 200)); // Glow effect
  fill(164,65,61,255);
  textSize(30);
  text("PWR", 870, 345);
  

  fill(167,212,198,255);
  textSize(30);
  text("CHG", 225, 310);

  //ECO MIDDLE
  fill(121,184,147,255);
  drawRoundedShape(520,250,85,37.5,15);
  textSize(30);
  fill('black');
  text("ECO", 568, 270);

  //top left text
  fill(148,188,176,255);
  text("HYBRID SYSTEM INDICATOR", 290, 195);


  //Mile per hour thing
  fill(148,188,176,255);
  text("ODO 1895" + m, 150, 405);
  textSize(20)
  text("MI",250, 409);

  textSize(50)
  if (isMorning) {
    text("15 MPH", width / 2, height - -55);
  } else if (isAfternoon) {
    text("65 MPH", width / 2, height - -55);
  } else if (isEvening) {
    text("5 MPH", width / 2, height - -55);
  } else if (isNight) {
    text("95 MPH", width / 2, height - -55);
  }

  if (toggle){
    fill(151,62,55);
    ellipse(70,195,15,15);
  }

  if (isJam){
    fill(151,62,55);
    text("TRAFFIC JAM", width / 1.2, height - -55);
  }

  if (frameCount % 30 ===0){
    toggle =!toggle;
    isJam =!isJam;
  }

  pop();
  
  // Display current time numerically
  fill(148,188,176,255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(
    nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2),
    width / 1.15,
    height / 1.5
  );
}

function applyGlow(glowColor) {
  drawingContext.shadowBlur = 20; // Intensity of the glow
  drawingContext.shadowColor = glowColor; // Glow color
}

function drawRoundedShape (x, y, w, h, offset){
  beginShape();

  //bottom left corner
  vertex(x, y + h);

  //top left corner
  bezierVertex(x,y + h/4, x + w / 4, y, x + w /3, y);

  //top right corner
  vertex (x + w + offset, y);
 

  //bottom right corner
  bezierVertex(x + w + w /8, y + h / 2, x + w, y + h, x + w *0.75, y + h);

  //bottom left (closing)
  vertex(x + w /3, y +h);
  vertex(x, y + h);

  endShape(CLOSE);
}

function drawRectFill(x, y, w, h, transform, transform2, fillColor) {
  push();
  fill(fillColor); // Set fill color for the filling shape
  noStroke(); // Disable stroke
  beginShape();
  vertex(x, y + h);         // Bottom-left
  vertex(x + w, y + h);     // Bottom-right
  vertex(x + w - h * transform, y); // Top-right 
  vertex(x - h * transform2, y);   // Top-left 
  endShape(CLOSE);
  pop();
}

function drawRect(x, y, w, h, transform, transform2, strokeColor, strokeWeightValue = 1) {
  push();
  noFill(); // Disable fill
  stroke(strokeColor); // Set stroke color for the outline
  strokeWeight(strokeWeightValue); // Set stroke weight
  beginShape();
  vertex(x, y + h);         // Bottom-left
  vertex(x + w, y + h);     // Bottom-right
  vertex(x + w - h * transform, y); // Top-right 
  vertex(x - h * transform2, y);   // Top-left 
  endShape(CLOSE);
  pop();
}

function drawRectFill1(x, y, w, h, transform, transform2, fillColor) {
  push();
  fill(fillColor); // Set fill color for the filling shape
  noStroke(); // Disable stroke
  beginShape();
  vertex(x, y + h);         // Bottom-left
  vertex(x + w, y + h);     // Bottom-right
  vertex(x + w + transform, y);     // Top-right 
  vertex(x + transform2, y);        // Top-left 
  endShape(CLOSE);
  pop();
}
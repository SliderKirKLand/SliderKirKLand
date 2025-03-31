let mgr;
let taxData = {}; // Global object to store data for ResultScene
let bg;
let ipodContainer; // parent container

let clickSound;
let slideSound;

let globalPlayButton; // Global button reference
let menuButton; //Menu or Home button
let isPlaying = false; 
let globalAudio;


function preload() {
  clickSound = loadSound('sfx/click.mp3');
  slideSound = loadSound('sfx/slide.mp3');

}

function setup() {
  mgr = new SceneManager();
  noCanvas();
  // Add scenes

  ipodContainer = createDiv()
  .id('ipod')
  .style('width', '160px') 
  .style('height', '120px') 
  .style('position', 'absolute') 
  .style('top', '50%') 
  .style('left', '50%')
  .style('transform', 'translate(-250%, -260%)') 
  .style('z-index', '2');

  globalPlayButton = createButton("")
    .parent(document.body)
    .style('position', 'fixed')
    .style('top', '50%')
    .style('left', '50%')
    .style('transform', 'translate(-45%, 270%)')
    .style('width', '40px') // Debug width
    .style('height', '40px') // Debug height
    .style('border', '1px solid #000') // Visible border for debugging
    .style('background', 'transparent') // Invisible button background
    .style('cursor', 'pointer')
    .style('z-index', '9999') // Ensure it's above other elements
    .mousePressed(() => {
      clickSound.play(); // Play the click sound
      togglePlayStop(); // Toggle audio
    });

    menuButton = createButton("")
    .parent(document.body)
    .style('position', 'fixed')
    .style('top', '50%')
    .style('left', '50%')
    .style('transform', 'translate(-45%, -40%)')
    .style('width', '40px') // Debug width
    .style('height', '40px') // Debug height
    .style('border', '1px solid #000') // Visible border for debugging
    .style('background', 'transparent') // Invisible button background
    .style('cursor', 'pointer')
    .style('z-index', '9999') // Ensure it's above other elements
    .mousePressed(() => {
      keyPressed(ESCAPE); // Toggle audio
    });

  mgr.addScene(MenuScene);

  //music scene
  mgr.addScene(MusicScene);
  //help scene
  mgr.addScene(HelpScene);
  //tax scene
  mgr.addScene(WelcomeScene);
  mgr.addScene(InputScene);
  mgr.addScene(FamilyScene);
  mgr.addScene(SpouseScene); 
  mgr.addScene(DependentScene);
  mgr.addScene(JobScene);
  mgr.addScene(W2Scene);
  mgr.addScene(ResultScene);

  // Start with the Menu Scene
  mgr.showScene(MenuScene);
  // mgr.showScene(W2Scene);
}

function draw() {
  mgr.draw();
}

function keyPressed(key = null) {
  const keyCodeToCheck = key || keyCode; // Use passed key or global keyCode
  if (keyCodeToCheck === ESCAPE) {
    if (ipodContainer) {
      ipodContainer.html(''); // Clear the iPod container
    }
    mgr.showScene(MenuScene); // Navigate to MenuScene
    clickSound.play(); // Play the click sound
  }
  // Let the current scene handle other key events
  mgr.handleEvent('keyPressed');
}


function MenuScene() {
  let containerDiv;
  let titleBarDiv;
  let menuListDiv;

  this.enter = function() {
    background(0, 100, 200); // Blue background similar to the image

    // Outer container simulating iPod screen area
    containerDiv = createDiv()
      .style('width', '600px')
      .style('height', '600px')
      .parent(ipodContainer)
      .style('margin', '100px auto')
      .style('background', '#ffffff')
      .style('border', '4px solid #000')
      .style('border-radius', '2px')
      .style('overflow', 'hidden')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-size', '14px')
      .style('color', '#000')
      .style('position', 'relative')
      .style('z-index', '2');

    // Title bar at the top
    titleBarDiv = createDiv("iPod")
      .parent(containerDiv)
      .style('background', 'linear-gradient(to bottom, #d9e7ed, #94b2c6)')
      .style('color', '#00000')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('text-align', 'center')
      .style('padding', '2px 0');

    // Menu list area
    menuListDiv = createDiv()
      .parent(containerDiv)
      .style('position', 'absolute')
      .style('top', '22px')
      .style('left', '0')
      .style('right', '0')
      .style('bottom', '0')
      .style('background', '#d1dfea')
      .style('display', 'flex')
      .style('flex-direction', 'column')
      .style('justify-content', 'flex-start');

    // Create menu items with hover effects
    musicItem = this.createMenuItem("Music", () => {
      this.removeElements();
      clickSound.play();
      mgr.showScene(MusicScene); // Ensure MusicScene is defined
    });

    taxItem = this.createMenuItem("Tax", () => {
      this.removeElements();
      clickSound.play();
      mgr.showScene(WelcomeScene); // Navigate to your tax scene
    });

    helpItem = this.createMenuItem("Help", () => {
      this.removeElements();
      clickSound.play();
      mgr.showScene(HelpScene); // Ensure HelpScene is defined
    });
    
  };

  this.createMenuItem = function (label, callback) {
    let item = createDiv()
      .html(`${label} <span style="float:right;">></span>`)
      .parent(menuListDiv)
      .style('padding', '2px 10px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('cursor', 'pointer')
      .style('transition', 'all 0.3s ease')
      .style('border', '2px solid transparent')
      .style('color', '#000'); // Ensure text color is black by default
  
    // Add hover effect
    item.mouseOver(() => {
      item.style('border', '2px solid transparent');
      item.style(
        'border-image',
        'linear-gradient(to bottom, #437cb1, #3464a7) 1'
      ); // Gradient border
      item.style('background', 'linear-gradient(to bottom, #4b8ac3, #3464a7)');
      item.style('color', '#fff'); // Invert text color to white'
    });
  
    item.mouseOut(() => {
      item.style('border', '2px solid transparent'); // Remove border
      item.style('background', 'transparent');
      item.style('color', '#000'); // Reset text color to black
    });
  
    // Add click event
    item.mousePressed(callback);
  
    return item;
  };
  

  this.draw = function() {
    // Since we are using DOM elements for UI, background can remain static.
    background(0,100,200);
  };

  this.exit = function() {
    this.removeElements();
  };

  this.removeElements = function() {
    if (containerDiv) containerDiv.remove();
  };

  this.keyPressed = function() {
    // Handle keyboard events if needed (e.g., arrow keys)
  };
}


// Scene: Welcome
function WelcomeScene() {
  let containerDiv;
  let headerP;
  let instructionsP;

  this.enter = function () {
    // Create a fixed-size container div
    containerDiv = createDiv()
      .style('width', '600px')
      .parent(ipodContainer)
      .style('height', '600px')
      .style('display', 'flex')
      .style('flex-direction', 'column')
      .style('align-items', 'center')
      .style('justify-content', 'center')
      .style('margin', '100px auto') // center horizontally within the body
      .style('background', '#e0e0e0')
      .style('border', '4px solid #000')
      .style('border-radius', '2px')
      .style('position', 'relative')
      .style('z-index', '2');

      
    // Title
    headerP = createP("Welcome to Tax Helper!")
      .style('font-size', '24px')
      .style('text-align', 'center')
      .style('margin', '20px 0');
    headerP.parent(containerDiv);

    // Instructions
    instructionsP = createP("Touch to start")
      .style('text-align', 'center')
      .style('font-size', '16px')
      .style('margin', '10px 0');
    instructionsP.parent(containerDiv);
  };

  this.draw = function () {
    background(220);
  };

  this.keyPressed = function () {
    if (keyCode === 32) {
      clickSound.play();
      this.removeElements();
      mgr.showScene(InputScene);
    }
  };

  this.exit = function () {
    this.removeElements();
  };

  this.removeElements = function() {
    if (containerDiv) containerDiv.remove();
  };
}



// Scene: Input
function InputScene() {
  let containerDiv;
  
  // References to DOM elements for later removal
  let firstNameP, firstNameInput;
  let lastNameP, lastNameInput;
  let ssnP, ssnInput;
  let blindCheckbox;
  let dobP, dobInput;
  let phoneP, phoneInput;
  let emailP, emailInput;
  let dependentCheckbox;
  let addressP, addressInput;
  let unitP, unitInput;
  let cityP, cityInput;
  let foreignCheckbox;
  let stateP, stateInput;
  let zipP, zipInput;
  let residencyP, residencyStateInput;
  let saveButton;

  this.enter = function () {
    background(220);

    // Create a parent container with fixed 400x600px and a scrollbar
    containerDiv = createDiv().style('display', 'f30x')
                              .style('flex-direction', 'column')
                              .parent(ipodContainer)
                              .style('width', '600px')
                              .style('height', '600px')
                              .style('overflow', 'hidden')
                              .style('overflow-hidden', 'background')
                              .style('overflow-y', 'scroll')
                              .style('overflow-y', 'auto') 
                              .style('scrollbar-width', 'none')  // Enables vertical scrolling
                              .style('margin', '100px auto')
                              .style('padding', '2px')
                              .style('background', '#e0e0e0')
                              .style('border', '4px solid #000')
                              .style('border-radius', '2px')
                              .style('position', 'relative')
                              .style('z-index', '2');

    firstNameP = createP("First Name and Initial");
    firstNameP.parent(containerDiv);

    firstNameInput = createInput();
    firstNameInput.parent(containerDiv).style('width','100%');

    lastNameP = createP("Last Name");
    lastNameP.parent(containerDiv);

    lastNameInput = createInput();
    lastNameInput.parent(containerDiv).style('width','100%');

    ssnP = createP("SSN/TIN");
    ssnP.parent(containerDiv);

    ssnInput = createInput();
    ssnInput.parent(containerDiv).style('width','100%');

    blindCheckbox = createCheckbox("Is this person blind?", false);
    blindCheckbox.parent(containerDiv);

    dobP = createP("Date of Birth (mm/dd/yyyy)");
    dobP.parent(containerDiv);

    dobInput = createInput();
    dobInput.parent(containerDiv).style('width','100%');

    phoneP = createP("Contact phone number");
    phoneP.parent(containerDiv);

    phoneInput = createInput();
    phoneInput.parent(containerDiv).style('width','100%');

    emailP = createP("Contact email address");
    emailP.parent(containerDiv);

    emailInput = createInput();
    emailInput.parent(containerDiv).style('width','100%');

    dependentCheckbox = createCheckbox("Check if you are a dependent", false);
    dependentCheckbox.parent(containerDiv);

    addressP = createP("Address");
    addressP.parent(containerDiv);

    addressInput = createInput();
    addressInput.parent(containerDiv).style('width','100%');

    unitP = createP("Unit No");
    unitP.parent(containerDiv);

    unitInput = createInput();
    unitInput.parent(containerDiv).style('width','100%');

    cityP = createP("City");
    cityP.parent(containerDiv);

    cityInput = createInput();
    cityInput.parent(containerDiv).style('width','100%');

    foreignCheckbox = createCheckbox("Do you have a foreign address?", false);
    foreignCheckbox.parent(containerDiv);

    stateP = createP("State");
    stateP.parent(containerDiv);

    stateInput = createInput();
    stateInput.parent(containerDiv).style('width','100%');

    zipP = createP("Zip");
    zipP.parent(containerDiv);

    zipInput = createInput();
    zipInput.parent(containerDiv).style('width','100%');

    residencyP = createP("Residency State");
    residencyP.parent(containerDiv);

    residencyStateInput = createInput();
    residencyStateInput.parent(containerDiv).style('width','100%');

    saveButton = createButton("SAVE AND CONTINUE");
    saveButton.parent(containerDiv)
              .style('padding', '10px')
              .style('background', '#28a742')
              .style('color', '#fff')
              .style('border', 'none')
              .style('border-radius', '3px')
              .style('cursor', 'pointer')
              .style('margin-top', '10px');

    saveButton.mousePressed(() => {
      clickSound.play();

      // Clean up elements before moving to next scene
      this.removeElements();
      mgr.showScene(FamilyScene);
    });
  };

  this.draw = function () {
    background(220);
  };

  this.exit = function () {
    this.removeElements();
  };

  this.removeElements = function() {
    if (containerDiv) containerDiv.remove();
  };

  this.keyPressed = function () {
    // Optional: handle keyboard events
  };
}

function FamilyScene() {
  let containerDiv;
  let familyHeaderP;
  let spouseInfoP, spouseAddButton;
  let dependentInfoP, dependentAddButton;
  let filingStatusP, filingStatusSelect;
  let previousButton, saveButton;

  this.enter = function() {
    background(220);

    // Container for the scene elements
    containerDiv = createDiv().style('display', 'flex')
                              .style('flex-direction', 'column')
                              .parent(ipodContainer)
                              .style('width', '600px')
                              .style('height', '600px')
                              .style('overflow', 'hidden')
                              .style('overflow-hidden', 'background')
                              .style('overflow-y', 'scroll')
                              .style('overflow-y', 'auto') 
                              .style('scrollbar-width', 'none')
                              .style('margin', '100px auto')
                              .style('padding', '2px')
                              .style('background', '#e0e0e0')
                              .style('border', '4px solid #000')
                              .style('border-radius', '2px')
                              .style('position', 'relative')
                              .style('z-index', '2');
                              

    familyHeaderP = createP("Family Information")
                     .style('font-size', '24px')
                     .style('margin-bottom', '20px');
    familyHeaderP.parent(containerDiv);

    // Spouse Information
    spouseInfoP = createP("Spouse Information")
                   .style('font-size', '18px')
                   .style('margin', '10px 0');
    spouseInfoP.parent(containerDiv);

    spouseAddButton = createButton("ADD")
                       .style('padding', '10px')
                       .style('background', '#eee')
                       .style('border', '1px solid #ccc')
                       .style('border-radius', '3px')
                       .style('cursor', 'pointer');
    spouseAddButton.parent(containerDiv);
    spouseAddButton.mousePressed(() => {
      this.removeElements();
      clickSound.play();
      mgr.showScene(SpouseScene);
    });

    // Dependent Information
    dependentInfoP = createP("Dependent Information")
                      .style('font-size', '18px')
                      .style('margin', '20px 0 10px 0');
    dependentInfoP.parent(containerDiv);

    dependentAddButton = createButton("ADD")
                          .style('padding', '10px')
                          .style('background', '#eee')
                          .style('border', '1px solid #ccc')
                          .style('border-radius', '3px')
                          .style('cursor', 'pointer');
    dependentAddButton.parent(containerDiv);
    dependentAddButton.mousePressed(() => {
      this.removeElements();
      clickSound.play();
      mgr.showScene(DependentScene);
    });

    // Filing Status
    filingStatusP = createP("Filing Status")
                     .style('font-size', '18px')
                     .style('margin', '20px 0 10px 0');
    filingStatusP.parent(containerDiv);

    filingStatusSelect = createSelect();
    filingStatusSelect.parent(containerDiv)
                      .style('width', '100%')
                      .style('padding', '8px')
                      .style('border', '1px solid #ccc')
                      .style('border-radius', '3px');
    filingStatusSelect.option('Single');
    filingStatusSelect.option('Married Filing Jointly');
    filingStatusSelect.option('Married Filing Separately');
    filingStatusSelect.option('Head of Household');
    filingStatusSelect.option('Qualifying Widow(er)');

    // Buttons: Previous and Save and Continue
    let buttonContainer = createDiv().style('display', 'flex')
                                     .style('justify-content', 'space-between')
                                     .style('margin-top', '20px');
    buttonContainer.parent(containerDiv);

    previousButton = createButton("PREVIOUS")
                      .style('padding', '2px 2px')
                      .style('background', '#eee')
                      .style('border', '1px solid #ccc')
                      .style('border-radius', '3px')
                      .style('cursor', 'pointer');
    previousButton.parent(buttonContainer);
    previousButton.mousePressed(() => {
      this.removeElements();
      clickSound.play();
      mgr.showScene(InputScene);
      clickSound.play();
    });

    saveButton = createButton("SAVE AND CONTINUE")
                  .style('padding', '2px 2px')
                  .style('background', '#28a742')
                  .style('color', '#fff')
                  .style('border', 'none')
                  .style('border-radius', '3px')
                  .style('cursor', 'pointer');
    saveButton.parent(buttonContainer);
    saveButton.mousePressed(() => {
      taxData.filingStatus = filingStatusSelect.value();
      this.removeElements();
      clickSound.play();
      mgr.showScene(JobScene);
      clickSound.play();
    });
  };

  this.draw = function() {
    background(220);
  };

  this.exit = function() {
    this.removeElements();
  };

  this.removeElements = function() {
    if (containerDiv) containerDiv.remove();
  };

  this.keyPressed = function() {
    // Optional: handle keys if needed
  };
}

function SpouseScene() {
  let containerDiv;
  let headerP;
  let fnameP, fnameInput;
  let lnameP, lnameInput;
  let ssnP, ssnInput;
  let blindCheck;
  let dobP, dobInput;
  let dependentCheck;
  let saveButton, discardButton;

  this.enter = function() {
    background(220);

    containerDiv = createDiv().style('display', 'flex')
                              .style('flex-direction', 'column')
                              .parent(ipodContainer)
                              .style('width', '600px')
                              .style('height', '600px')
                              .style('overflow', 'hidden')
                              .style('overflow-hidden', 'background')
                              .style('overflow-y', 'scroll')
                              .style('overflow-y', 'auto') 
                              .style('scrollbar-width', 'none')
                              .style('margin', '100px auto')
                              .style('padding', '2px')
                              .style('background', '#e0e0e0')
                              .style('border', '4px solid #000')
                              .style('border-radius', '2px')
                              .style('position', 'relative')
                              .style('z-index', '2');

    headerP = createP("Spouse Information")
               .style('font-size', '24px')
               .style('margin-bottom', '20px');
    headerP.parent(containerDiv);

    fnameP = createP("First Name and Initial");
    fnameP.parent(containerDiv);
    fnameInput = createInput();
    fnameInput.parent(containerDiv).style('width','100%');

    lnameP = createP("Last Name");
    lnameP.parent(containerDiv);
    lnameInput = createInput();
    lnameInput.parent(containerDiv).style('width','100%');

    ssnP = createP("SSN / TIN");
    ssnP.parent(containerDiv);
    ssnInput = createInput();
    ssnInput.parent(containerDiv).style('width','100%');

    blindCheck = createCheckbox("Is this person blind?", false);
    blindCheck.parent(containerDiv);

    dobP = createP("Date of Birth (mm/dd/yyyy)");
    dobP.parent(containerDiv);
    dobInput = createInput();
    dobInput.parent(containerDiv).style('width','100%');

    dependentCheck = createCheckbox("Check if your spouse is a dependent", false);
    dependentCheck.parent(containerDiv);

    let buttonContainer = createDiv().style('display', 'flex')
                                     .style('justify-content', 'space-between')
                                     .style('margin-top', '20px');
    buttonContainer.parent(containerDiv);

    saveButton = createButton("SAVE")
                  .style('padding', '10px 10px')
                  .style('background', '#28a742')
                  .style('color', '#fff')
                  .style('border', 'none')
                  .style('border-radius', '3px')
                  .style('cursor', 'pointer');
    saveButton.parent(buttonContainer);
    saveButton.mousePressed(() => {
      // Save spouse data to global object
      clickSound.play();

      taxData.spouse = {
        firstName: fnameInput.value(),
        lastName: lnameInput.value(),
        ssn: ssnInput.value(),
        isBlind: blindCheck.checked(),
        dob: dobInput.value(),
        isDependent: dependentCheck.checked()
      };

      this.removeElements();
      mgr.showScene(FamilyScene);
    });

    discardButton = createButton("DISCARD")
                     .style('padding', '10px 5px')
                     .style('background', '#eee')
                     .style('border', '1px solid #ccc')
                     .style('border-radius', '3px')
                     .style('cursor', 'pointer');
    discardButton.parent(buttonContainer);
    discardButton.mousePressed(() => {
      // Do not save any changes
      this.removeElements();
      clickSound.play();
      mgr.showScene(FamilyScene);
      clickSound.play();
    });
  };

  this.draw = function() {
    background(220);
  };

  this.exit = function() {
    this.removeElements();
  };

  this.removeElements = function() {
    if (containerDiv) containerDiv.remove();
  };

  this.keyPressed = function() {
    // Optional: handle key events
  };
}

function DependentScene() {
  let containerDiv;
  let headerP;
  let fnameP, fnameInput;
  let lnameP, lnameInput;
  let ssnP, ssnInput;
  let blindCheck;
  let dobP, dobInput;
  let dependentCheck;
  let saveButton, discardButton;

  this.enter = function() {
    background(220);

    containerDiv = createDiv().style('display', 'flex')
                              .style('flex-direction', 'column')
                              .parent(ipodContainer)
                              .style('width', '600px')
                              .style('height', '600px')
                              .style('overflow', 'hidden')
                              .style('overflow-hidden', 'background')
                              .style('overflow-y', 'scroll')
                              .style('overflow-y', 'auto') 
                              .style('scrollbar-width', 'none')
                              .style('margin', '100px auto')
                              .style('padding', '2px')
                              .style('background', '#e0e0e0')
                              .style('border', '4px solid #000')
                              .style('border-radius', '2px')
                              .style('position', 'relative')
                              .style('z-index', '2');

    headerP = createP("Dependent Information")
               .style('font-size', '24px')
               .style('margin-bottom', '20px');
    headerP.parent(containerDiv);

    fnameP = createP("First Name and Initial");
    fnameP.parent(containerDiv);
    fnameInput = createInput();
    fnameInput.parent(containerDiv).style('width','100%');

    lnameP = createP("Last Name");
    lnameP.parent(containerDiv);
    lnameInput = createInput();
    lnameInput.parent(containerDiv).style('width','100%');

    ssnP = createP("SSN / TIN");
    ssnP.parent(containerDiv);
    ssnInput = createInput();
    ssnInput.parent(containerDiv).style('width','100%');

    blindCheck = createCheckbox("Is this person blind?", false);
    blindCheck.parent(containerDiv);

    dobP = createP("Date of Birth (mm/dd/yyyy)");
    dobP.parent(containerDiv);
    dobInput = createInput();
    dobInput.parent(containerDiv).style('width','100%');

    dobP = createP("Relationship to Taxpayer");
    dobP.parent(containerDiv);
    dobInput = createInput();
    dobInput.parent(containerDiv).style('width','100%');

    dobP = createP("How many months did you live together this year?");
    dobP.parent(containerDiv);
    dobInput = createInput();
    dobInput.parent(containerDiv).style('width','100%');

    blindCheck = createCheckbox("Is this person a full-time student?", false);
    blindCheck.parent(containerDiv);

    let buttonContainer = createDiv().style('display', 'flex')
                                     .style('justify-content', 'space-between')
                                     .style('margin-top', '20px');
    buttonContainer.parent(containerDiv);

    saveButton = createButton("SAVE")
                  .style('padding', '10px 10px')
                  .style('background', '#28a742')
                  .style('color', '#fff')
                  .style('border', 'none')
                  .style('border-radius', '3px')
                  .style('cursor', 'pointer');
    saveButton.parent(buttonContainer);
    saveButton.mousePressed(() => {
      clickSound.play();
      // Save spouse data to global object
      taxData.spouse = {
        firstName: fnameInput.value(),
        lastName: lnameInput.value(),
        ssn: ssnInput.value(),
        isBlind: blindCheck.checked(),
        dob: dobInput.value(),
        isDependent: dependentCheck.checked()
      };

      this.removeElements();
      mgr.showScene(FamilyScene);
    });

    discardButton = createButton("DISCARD")
                     .style('padding', '10px 5px')
                     .style('background', '#eee')
                     .style('border', '1px solid #ccc')
                     .style('border-radius', '3px')
                     .style('cursor', 'pointer');
    discardButton.parent(buttonContainer);
    discardButton.mousePressed(() => {
      // Do not save any changes
      this.removeElements();
      clickSound.play();
      mgr.showScene(FamilyScene);
      clickSound.play();
    });
  };

  this.draw = function() {
    background(220);
  };

  this.exit = function() {
    this.removeElements();
  };

  this.removeElements = function() {
    if (containerDiv) containerDiv.remove();
  };

  this.keyPressed = function() {
    // Optional: handle key events
  };
}

function JobScene() {
  let containerDiv;
  let headerP;
  let jobAddButton;
  let saveButton, previousButton;

  this.enter = function() {
    background(220);

    containerDiv = createDiv().style('display', 'flex')
                              .style('flex-direction', 'column')
                              .parent(ipodContainer)
                              .style('width', '600px')
                              .style('height', '600px')
                              .style('overflow', 'hidden')
                              .style('overflow-hidden', 'background')
                              .style('overflow-y', 'scroll')
                              .style('overflow-y', 'auto') 
                              .style('scrollbar-width', 'none')
                              .style('margin', '100px auto')
                              .style('padding', '2px')
                              .style('background', '#e0e0e0')
                              .style('border', '4px solid #000')
                              .style('border-radius', '2px')
                              .style('position', 'relative')
                              .style('z-index', '2');

    headerP = createP("Job Information")
               .style('font-size', '24px')
               .style('margin-bottom', '20px');
    headerP.parent(containerDiv);

    jobAddButton = createButton("ADD")
                       .style('padding', '10px')
                       .style('background', '#eee')
                       .style('border', '1px solid #ccc')
                       .style('border-radius', '3px')
                       .style('cursor', 'pointer');
    jobAddButton.parent(containerDiv);
    jobAddButton.mousePressed(() => {
      clickSound.play();
      this.removeElements();
      mgr.showScene(W2Scene);
    });

    let buttonContainer = createDiv().style('display', 'flex')
                                     .style('justify-content', 'space-between')
                                     .style('margin-top', '20px');
    buttonContainer.parent(containerDiv);

      previousButton = createButton("PREVIOUS")
                      .style('padding', '10px 2px')
                      .style('background', '#eee')
                      .style('border', 'none')
                      .style('border-radius', '3px')
                      .style('cursor', 'pointer')
                      .style('margin-top', '10px');
    previousButton.parent(buttonContainer);
    previousButton.mousePressed(() => {
      this.removeElements();
      clickSound.play();
      mgr.showScene(FamilyScene);
      clickSound.play();
    });

    saveButton = createButton("SAVE AND CONTINUE")
              .style('padding', '10px 2px')
              .style('background', '#28a742')
              .style('color', '#fff')
              .style('border', 'none')
              .style('border-radius', '3px')
              .style('cursor', 'pointer')
              .style('margin-top', '10px');
    saveButton.parent(buttonContainer);
    saveButton.mousePressed(() => {
      clickSound.play();
      this.removeElements();
      mgr.showScene(RefundScene);
    });

  };

  this.draw = function() {
    background(220);
  };

  this.exit = function() {
    this.removeElements();
  };

  this.removeElements = function() {
    if (containerDiv) containerDiv.remove();
  };

  this.keyPressed = function() {
    // Optional: handle key events
  };
}

function W2Scene() {
  let containerDiv;

  // Basic W2 fields
  let employerNameInput, einInput, occupationInput;
  let wagesInput, federalTaxInput;
  let ssWagesInput, ssTaxInput;
  let medicareWagesInput, medicareTaxInput;
  let stateSelect, stateWagesInput, stateIncomeTaxInput, employeeSelect;

  // Buttons
  let saveButton, discardButton;
  let previousButton, saveContinueButton;

  // Box12 related
  let box12EditButton;
  let box12Menu; // The hidden menu for editing box12 codes
  let doneButton; // For closing the menu

  let box12Codes = [
    {code: 'A', desc: 'Uncollected social security or RRTA tax on tips.'},
    {code: 'B', desc: 'Uncollected Medicare tax on tips.'},
    {code: 'C', desc: 'Taxable cost of group-term life insurance over $20,000.'},
    {code: 'D', desc: 'Elective deferrals under a section 401(k).'},
    {code: 'E', desc: 'Elective deferrals under a section 403(b).'},
    {code: 'F', desc: 'Elective deferrals under a section 408(k)(6).'},
    {code: 'G', desc: 'Deferrals/employer contrib. under section 427 deferred comp.'},
    {code: 'H', desc: 'Deferrals under section 201(c)(18)(D).'},
    {code: 'J', desc: 'Nontaxable sick pay.'},
    {code: 'K', desc: '20% excise tax on excess golden parachute payments.'},
    {code: 'L', desc: 'Substantiated emp. business expense reimbursements.'},
    {code: 'M', desc: 'Uncollected SS/RRTA tax on GTLI > $20,000 (former emp).'},
    {code: 'N', desc: 'Uncollected Medicare tax on GTLI > $20,000 (former emp).'},
    {code: 'P', desc: 'Excludable moving expense reimb. (Armed Forces).'},
    {code: 'Q', desc: 'Nontaxable combat pay.'},
    {code: 'R', desc: 'Employer contributions to an Archer MSA.'},
    {code: 'S', desc: 'Salary reduction contributions under a SIMPLE plan.'},
    {code: 'T', desc: 'Adoption benefits.'},
    {code: 'V', desc: 'Income from nonstatutory stock options.'},
    {code: 'W', desc: 'Employer contributions to HSA.'},
    {code: 'Y', desc: 'Deferrals under section 409A nonqualified deferred comp.'},
    {code: 'Z', desc: 'Income under nonqualified deferred comp failing 409A.'},
    {code: 'AA', desc: 'Roth contributions under 401(k).'},
    {code: 'BB', desc: 'Roth contributions under 403(b).'},
    {code: 'DD', desc: 'Cost of employer-sponsored health coverage.'},
    {code: 'EE', desc: 'Roth contrib. under governmental 427(b).'},
    {code: 'FF', desc: 'Permitted benefits under a QSEHRA.'},
    {code: 'GG', desc: 'Income from qualified equity grants (83(i)).'},
    {code: 'HH', desc: 'Aggregate deferrals under section 83(i).'}
  ];

  let box12Inputs = {};

  this.enter = function() {
    background(220);

    containerDiv = createDiv().style('display', 'flex')
                              .style('flex-direction', 'column')
                              .parent(ipodContainer)
                              .style('width', '600px')
                              .style('height', '600px')
                              .style('overflow', 'hidden')
                              .style('overflow-hidden', 'background')
                              .style('overflow-y', 'scroll')
                              .style('overflow-y', 'auto') 
                              .style('scrollbar-width', 'none')
                              .style('margin', '100px auto')
                              .style('padding', '2px')
                              .style('background', '#e0e0e0')
                              .style('border', '4px solid #000')
                              .style('border-radius', '2px')
                              .style('position', 'relative')
                              .style('z-index', '2');

    createP("Job Information")
      .style('font-size', '24px')
      .style('margin-bottom', '20px')
      .parent(containerDiv);

    createP("Input data from W-2")
      .style('font-size', '18px')
      .style('margin-bottom', '20px')
      .parent(containerDiv);

    // Employer name
    employerNameInput = createInput();
    createLabelWithInput("Employer name", employerNameInput, containerDiv);

    // EIN
    einInput = createInput();
    createLabelWithInput("Box b - Employer's Identification Number", einInput, containerDiv);

    // Occupation
    occupationInput = createInput();
    createLabelWithInput("Occupation", occupationInput, containerDiv);

    // Wages
    wagesInput = createInput();
    createLabelWithInput("Box 1 - Wages, tips, other compensation", wagesInput, containerDiv);

    // Federal Tax
    federalTaxInput = createInput();
    createLabelWithInput("Box 2 - Federal income tax withheld", federalTaxInput, containerDiv);

    // Social Security Wages & Tax
    ssWagesInput = createInput();
    createLabelWithInput("Box 3 - Social security wages", ssWagesInput, containerDiv);

    ssTaxInput = createInput();
    createLabelWithInput("Box 4 - Social security tax withheld", ssTaxInput, containerDiv);

    // Medicare Wages & Tax
    medicareWagesInput = createInput();
    createLabelWithInput("Box 5 - Medicare income", medicareWagesInput, containerDiv);

    medicareTaxInput = createInput();
    createLabelWithInput("Box 6 - Medicare tax withheld", medicareTaxInput, containerDiv);

    // Box 12 Information
    createP("Box 12 Information")
      .style('font-size', '18px')
      .style('margin-top', '20px')
      .style('margin-bottom', '10px')
      .parent(containerDiv);

    box12EditButton = createButton("EDIT")
      .style('padding', '10px')
      .style('background', '#eee')
      .style('border', '1px solid #ccc')
      .style('border-radius', '3px')
      .style('cursor', 'pointer')
      .parent(containerDiv);


    box12EditButton.mousePressed(() => {
      clickSound.play();
      box12Menu.style('display', 'block');
    });

    // State
    stateSelect = createSelect().style('width', '100%')
                                .style('padding', '8px')
                                .style('border', '1px solid #ccc')
                                .style('border-radius', '3px');
    stateSelect.option("Select State");
    stateSelect.option("AL");
    stateSelect.option("AK");
    stateSelect.option("AZ");
    stateSelect.option("AR");
    stateSelect.option("CA");
    stateSelect.option("CO");
    stateSelect.option("CT");
    stateSelect.option("DE");
    stateSelect.option("FL");
    stateSelect.option("GA");
    stateSelect.option("HI");
    stateSelect.option("ID");
    stateSelect.option("IL");
    stateSelect.option("IN");
    stateSelect.option("IA");
    stateSelect.option("KS");
    stateSelect.option("KY");
    stateSelect.option("LA");
    stateSelect.option("ME");
    stateSelect.option("MD");
    stateSelect.option("MA");
    stateSelect.option("MI");
    stateSelect.option("MN");
    stateSelect.option("MS");
    stateSelect.option("MO");
    stateSelect.option("MT");
    stateSelect.option("NE");
    stateSelect.option("NV");
    stateSelect.option("NH");
    stateSelect.option("NJ");
    stateSelect.option("NM");
    stateSelect.option("NY");
    stateSelect.option("NC");
    stateSelect.option("ND");
    stateSelect.option("OH");
    stateSelect.option("OK");
    stateSelect.option("OR");
    stateSelect.option("PA");
    stateSelect.option("RI");
    stateSelect.option("SC");
    stateSelect.option("SD");
    stateSelect.option("TN");
    stateSelect.option("TX");
    stateSelect.option("UT");
    stateSelect.option("VT");
    stateSelect.option("VA");
    stateSelect.option("WA");
    stateSelect.option("WV");
    stateSelect.option("WI");
    stateSelect.option("WY");

    createLabelWithInput("Box 12 - State", stateSelect, containerDiv);

    // State wages and tax
    stateWagesInput = createInput();
    createLabelWithInput("Box 16 - State wages, tips, etc", stateWagesInput, containerDiv);

    stateIncomeTaxInput = createInput();
    createLabelWithInput("Box 17 - State income tax", stateIncomeTaxInput, containerDiv);

    // Employee
    employeeSelect = createSelect().style('width', '100%')
                                   .style('padding', '8px')
                                   .style('border', '1px solid #ccc')
                                   .style('border-radius', '3px');
    employeeSelect.option("Select Employee");
    employeeSelect.option("Employee 1");
    employeeSelect.option("Employee 2");
    createLabelWithInput("Employee", employeeSelect, containerDiv);

    // SAVE and DISCARD
    let actionContainer = createDiv().style('display', 'flex')
                                     .style('gap', '20px')
                                     .style('margin-top', '20px')
                                     .parent(containerDiv);

    saveButton = createButton("SAVE")
      .style('padding', '10px 5px')
      .style('background', '#28a742')
      .style('color', '#fff')
      .style('border', 'none')
      .style('border-radius', '3px')
      .style('cursor', 'pointer')
      .parent(actionContainer);

    saveButton.mousePressed(() => {
      clickSound.play();
      storeW2Data();
      this.removeElements();
      mgr.showScene(JobScene);
    });

    discardButton = createButton("DISCARD")
      .style('padding', '10px 5px')
      .style('background', '#eee')
      .style('border', '1px solid #ccc')
      .style('border-radius', '3px')
      .style('cursor', 'pointer')
      .parent(actionContainer);

    discardButton.mousePressed(() => {
      clickSound.play();
      resetW2Fields();
      this.removeElements();
      mgr.showScene(JobScene);
    });

    // Create the hidden Box12 menu
    createBox12Menu();

    // PREVIOUS and SAVE AND CONTINUE
    let navContainer = createDiv().style('display', 'flex')
                                  .style('justify-content', 'space-between')
                                  .style('margin-top', '20px')
                                  .parent(containerDiv);

    previousButton = createButton("PREVIOUS")
      .style('padding', '10px 2px')
      .style('background', '#eee')
      .style('border', '1px solid #ccc')
      .style('border-radius', '3px')
      .style('cursor', 'pointer')
      .parent(navContainer);

    previousButton.mousePressed(() => {
      clickSound.play();
      this.removeElements();
      mgr.showScene(FamilyScene);
    });

    saveContinueButton = createButton("SAVE AND CONTINUE")
      .style('padding', '10px 2px')
      .style('background', '#28a742')
      .style('color', '#fff')
      .style('border', 'none')
      .style('border-radius', '3px')
      .style('cursor', 'pointer')
      .parent(navContainer);

    saveContinueButton.mousePressed(() => {
      storeW2Data();
      this.removeElements();
      mgr.showScene(RefundScene);
    });
  };

  this.draw = function() {
    background(220);
  };

  this.exit = function() {
    this.removeElements();
  };

  this.removeElements = function() {
    if (containerDiv) containerDiv.remove();
  };

  this.keyPressed = function() {
    // handle key events if needed
  };

  function createLabelWithInput(labelText, inputElement, parent) {
    createP(labelText)
      .style('font-size', '16px')
      .style('margin-top', '10px')
      .style('margin-bottom', '2px')
      .parent(parent);

    inputElement.parent(parent)
      .style('width', '100%')
      .style('padding', '8px')
      .style('border', '1px solid #ccc')
      .style('border-radius', '3px');
  }

  function createBox12Menu() {
    box12Menu = createDiv().style('display','none')
                           .style('position','absolute')
                           .style('border', '4px solid #000')
                           .style('border-radius', '2px')
                           .style('top', '50%') // Center vertically
                           .style('left', '50%') // Center horizontally
                           .style('transform', 'translate(-47%, -160%)')
                          .style('width', '165px')
                          .style('height', '125px')
                           .style('z-index','2')
                           .style('overflow','auto');

let menuContent = createDiv()
  .style('position', 'absolute') // Use absolute positioning
 // Offset to perfectly center
  .style('background', '#fff')
  .style('flex-direction', 'column')
  .style('width', '165px')
  .style('height', '125px')
  .style('overflow', 'hidden')
  .style('overflow-y', 'auto')
  .style('scrollbar-width', 'none')
  .style('padding', '2px')
  .style('box-sizing', 'border-box')
  .style('background', '#f9f9f9')
  .style('border', '1px solid #ccc')
  .style('border-radius', '2px')
  .parent(box12Menu);

    createP("Box 12 Information").style('font-size','18px')
      .style('margin-bottom','20px')
      .parent(menuContent);

    box12Codes.forEach(item => {
      let codeContainer = createDiv().parent(menuContent)
        .style('margin-bottom','20px');

      createP(`Code ${item.code}: ${item.desc}`)
        .style('font-size','14px')
        .style('margin-bottom','2px')
        .parent(codeContainer);

      let lineContainer = createDiv().parent(codeContainer)
        .style('display','flex')
        .style('align-items','center')
        .style('gap','2px');

      createSpan(item.code).parent(lineContainer)
        .style('font-weight','bold');

      let input = createInput().parent(lineContainer)
        .style('width','100%')
        .style('padding','8px')
        .style('border','1px solid #ccc')
        .style('border-radius','3px');

      box12Inputs[item.code] = input;
    });

    doneButton = createButton("DONE")
      .style('padding','10px 20px')
      .style('background','#eee')
      .style('border','1px solid #ccc')
      .style('border-radius','3px')
      .style('cursor','pointer')
      .parent(menuContent);

    doneButton.mousePressed(() => {
      clickSound.play();
      saveBox12Data();
      box12Menu.style('display','none');
    });
  }

  function saveBox12Data() {
    let box12Data = {};
    for (let codeObj of box12Codes) {
      let val = box12Inputs[codeObj.code].value();
      if (val && val.trim() !== '') {
        box12Data[codeObj.code] = val.trim();
      }
    }

    if (!taxData.w2) taxData.w2 = {};
    taxData.w2.box12 = box12Data;
  }

  function storeW2Data() {
    taxData.w2 = taxData.w2 || {};
    taxData.w2.employerName = employerNameInput.value();
    taxData.w2.ein = einInput.value();
    taxData.w2.occupation = occupationInput.value();
    taxData.w2.wages = wagesInput.value();
    taxData.w2.federalTax = federalTaxInput.value();
    taxData.w2.ssWages = ssWagesInput.value();
    taxData.w2.ssTax = ssTaxInput.value();
    taxData.w2.medicareWages = medicareWagesInput.value();
    taxData.w2.medicareTax = medicareTaxInput.value();
    // box12 is saved separately via saveBox12Data()
    taxData.w2.state = stateSelect.value();
    taxData.w2.stateWages = stateWagesInput.value();
    taxData.w2.stateIncomeTax = stateIncomeTaxInput.value();
    taxData.w2.employee = employeeSelect.value();
  }

  function resetW2Fields() {
    employerNameInput.value('');
    einInput.value('');
    occupationInput.value('');
    wagesInput.value('');
    federalTaxInput.value('');
    ssWagesInput.value('');
    ssTaxInput.value('');
    medicareWagesInput.value('');
    medicareTaxInput.value('');
    stateSelect.selected('Select State');
    stateWagesInput.value('');
    stateIncomeTaxInput.value('');
    employeeSelect.selected('Select Employee');

    // Clear box12Inputs as well
    for (let codeObj of box12Codes) {
      box12Inputs[codeObj.code].value('');
    }
    if (taxData.w2) {
      taxData.w2.box12 = {};
    }
  }
}


function MusicScene() {
  let containerDiv;
  let fileInput;
  let audio;
  let songTitle = "No song loaded";

  this.enter = function () {
    background(200);

    // Container for elements
    containerDiv = createDiv()
      .style('width', '600px')
      .style('height', '600px')
      .parent(ipodContainer)
      .style('margin', '100px auto')
      .style('background', '#d1dfea')
      .style('border', '4px solid #000')
      .style('border-radius', '2px')
      .style('overflow', 'hidden')
      .style('overflow-hidden', 'background')
      .style('overflow-y', 'scroll')
      .style('overflow-y', 'auto') 
      .style('scrollbar-width', 'none')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-size', '14px')
      .style('color', '#000')
      .style('position', 'relative')
      .style('z-index', '2');

    // Title bar at the top
    titleBarDiv = createDiv("Now Playing")
      .parent(containerDiv)
      .style('background', 'linear-gradient(to bottom, #d9e7ed, #94b2c6)')
      .style('color', '#00000')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('text-align', 'center')
      .style('padding', '2px 0');

    // File input for audio
    fileInput = createFileInput(handleFile)
      .parent(containerDiv)
      .style('width', '150px')
      .style('margin', '5px auto')
      .style('display', 'block')
      .mousePressed(()=>{
        clickSound.play();
      });
      
    // Volume slider
    createDiv("Volume:")
      .parent(containerDiv)
      .style('text-align', 'center')
      .style('font-weight', 'bold')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('margin-top', '5px');

    volumeSlider = createSlider(0, 1, 0.5, 0.01) // Min: 0, Max: 1, Default: 0.5, Step: 0.01
      .parent(containerDiv)
      .style('width', '100px')
      .style('margin', '5px 30px')
      .input(() => {
        if (audio) {
          audio.setVolume(volumeSlider.value());
        }
        if (slideSound && !slideSound.isPlaying()){
          slideSound.play();
        }
      });
  };

  this.draw = function () {
    background(200);
  };

  this.exit = function () {
    if (containerDiv) containerDiv.remove();
    if (audio) audio.stop();
  };

  function handleFile(file) {
    console.log("File received:", file);
    if (file.type === 'audio') {
      if (audio) {
        audio.stop();
        audio = null;
      }
      console.log("Loading audio file...");
      audio = loadSound(file.data, () => {
        console.log("Audio loaded successfully!");
        songTitle = `Loaded: ${file.name}`;
        globalAudio = audio;
        
        let songTitleElement = select('#songTitle');
        if (!songTitleElement) {
          console.warn("Element with ID 'songTitle' not found. Creating it dynamically.");
          songTitleElement = createDiv()
            .id('songTitle')
            .parent(containerDiv)
            .style('text-align', 'center')
            .style('font-weight','bold')
            .style('font-family', 'myriad-pro, sans-serif')
            .style('margin', '5px auto')
            .style('color', '#000')
            .style('font-size', '12px');
        }
        songTitleElement.html(songTitle); // Update dynamically
      }, () => {
        console.error("Failed to load audio file.");
      });
    } else {
      console.warn("Invalid file type. Please upload an audio file.");
      songTitle = "Invalid file type. Please upload an audio file.";
      let songTitleElement = select('#songTitle');
      if (!songTitleElement) {
        console.warn("Element with ID 'songTitle' not found. Creating it dynamically.");
        songTitleElement = createDiv()
          .id('songTitle')
          .parent(containerDiv)
          .style('text-align', 'center')
          .style('font-weight','bold')
          .style('font-family', 'myriad-pro, sans-serif')
          .style('margin', '5px auto')
          .style('color', '#000')
          .style('font-size', '12px');
      }
      songTitleElement.html(songTitle);
    }
  }
  
  
}

// Global toggle function
function togglePlayStop() {
  if (globalAudio) {
    if (isPlaying) {
      globalAudio.pause();
    } else {
      globalAudio.play();
    }
    isPlaying = !isPlaying; // Toggle play state
  } else {
    console.log("No audio loaded.");
  }
}



function HelpScene() {
  let containerDiv;

  this.enter = function () {
    background(0, 100, 200); // Match the iPod screen background

    // Outer container for the help screen
    containerDiv = createDiv()
      .parent(ipodContainer) // Attach to the iPod container
      .style('width', '600px')
      .style('height', '600px')
      .style('margin', '100px auto')
      .style('background', '#d1dfea')
      .style('border', '4px solid #000')
      .style('border-radius', '2px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('overflow', 'hidden')
      .style('overflow-hidden', 'background')
      .style('overflow-y', 'scroll')
      .style('overflow-y', 'auto') 
      .style('scrollbar-width', 'none')
      .style('font-size', '14px')
      .style('color', '#000')
      .style('position', 'relative')
      .style('z-index', '2');

    // Title bar
    createDiv("Help")
      .parent(containerDiv)
      .style('background', 'linear-gradient(to bottom, #d9e7ed, #94b2c6)')
      .style('color', '#000')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('text-align', 'center')
      .style('padding', '2px 0');

    // Instructions
    createDiv("Press the MENU button to go back home.")
      .parent(containerDiv)
      .style('margin', '10px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('text-align', 'center');

    createDiv("Add songs in the Music tab.")
      .parent(containerDiv)
      .style('margin', '10px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('text-align', 'center');

    createDiv("Complete your tax form in the Tax tab.")
      .parent(containerDiv)
      .style('margin', '10px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('text-align', 'center');
  };

  this.draw = function() {
    background(0,100,200);
  };

  this.exit = function() {
    this.removeElements();
  };

  this.removeElements = function() {
    if (containerDiv) containerDiv.remove();
  };

  this.keyPressed = function() {
    // Handle keyboard events if needed (e.g., arrow keys)
  };
}

function RefundScene(){
  let containerDiv;
  let routingNumberInput, accountNumberInput;
  let checkingRadio, savingsRadio;
  let previousButton, saveButton;

  this.enter = function (){
    background(220);

    containerDiv = createDiv()
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .parent(ipodContainer)
    .style('width', '600px')
    .style('height', '600px')
    .style('overflow', 'hidden')
    .style('overflow-hidden', 'background')
    .style('overflow-y', 'scroll')
    .style('overflow-y', 'auto') 
    .style('scrollbar-width', 'none')
    .style('margin', '100px auto')
    .style('padding', '2px')
    .style('background', '#e0e0e0')
    .style('border', '4px solid #000')
    .style('border-radius', '2px')
    .style('position', 'relative')
    .style('z-index', '2');


    createDiv ("Refund Information")
    .style('font-size', '24px')
    .style('margin-bottom', '20px')
    .style('font-family', 'myriad-pro, sans-serif')
    .style('font-weight', 'bold')
    .parent(containerDiv);

    createP('Bank Rounting number')
    .style('font-size', '14px')
    .style('margin', '10px 0 5px 0')
    .style('font-family', 'myriad-pro, sans-serif')
    .style('font-weight', 'bold')
    .style('color', '#666')
    .parent(containerDiv);

    routingNumberInput = createInput('')
    .style('width', '100%')
    .style('padding', '10px')
    .style('border', '1px solid #ccc')
    .style('font-family', 'myriad-pro, sans-serif')
    .style('font-weight', 'bold')
    .style('border-radius', '3px')
    .style('outline', 'none')
    .parent(containerDiv);

    createP('Bank Account number')
    .style('font-size', '14px')
    .style('margin', '10px 0 5px 0')
    .style('font-family', 'myriad-pro, sans-serif')
    .style('font-weight', 'bold')
    .style('color', '#666')
    .parent(containerDiv);

    accountNumberInput = createInput('')
    .style('width', '100%')
    .style('padding', '10px')
    .style('border', '1px solid #ccc')
    .style('border-radius', '3px')
    .style('outline', 'none')
    .parent(containerDiv);

    createP('Account Type')
    .style('font-size', '14px')
    .style('margin', '10px 0 5px 0')
    .style('font-family', 'myriad-pro, sans-serif')
    .style('font-weight', 'bold')
    .style('color', '#666')
    .parent(containerDiv);

    let accountTypeDiv = createDiv()
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .style('margin-bottom', '20px')
    .parent(containerDiv);

    checkingRadio = createRadio('accountType');
    checkingRadio.option('Checking', 'Checking');
    checkingRadio.style('margin-bottom', '10px').parent(accountTypeDiv);

    savingsRadio = createRadio('accountType');
    savingsRadio.option('Savings', 'Savings');
    savingsRadio.style('margin-bottom', '10px').parent(accountTypeDiv);

    checkingRadio.value('Checking'); // Default to Checking
    

    let buttonContainer = createDiv()
      .style('display','flex')
      .style('justify-content', 'sapce between')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('margin-top','20px')
      .parent(containerDiv);
    
      previousButton = createButton("PREVIOUS")
      .style('padding', '10px 2px')
      .style('background', '#eee')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('border', 'none')
      .style('border-radius', '3px')
      .style('cursor', 'pointer')
      .style('margin-top', '10px');
      previousButton.parent(buttonContainer);
      previousButton.mousePressed(() => {
        this.removeElements();
        clickSound.play();
        mgr.showScene(JobScene);
        clickSound.play();
      });

      saveButton = createButton('SAVE AND CONTINUE')
      .style('padding', '10px 2px')
      .style('background', '#28a745')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('color', '#fff')
      .style('border', 'none')
      .style('border-radius', '3px')
      .style('margin-top', '10px')
      .style('cursor', 'pointer')
      .parent(buttonContainer)
      .mousePressed(() => {

        clickSound.play();
      
        this.removeElements();
        mgr.showScene(InfoScene);
      });
  };

  this.draw = function () {
    background(220);
  };

  this.exit = function () {
    this.removeElements();
  };

  this.removeElements = function () {
    if (containerDiv) containerDiv.remove();
  };
}

function InfoScene() {
  let containerDiv;
  let cryptoCheckbox, foreignAccountCheckbox, foreignTrustCheckbox;
  let previousButton;

  this.enter = function () {
    background(220);

    // Create container
    containerDiv = createDiv()
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .parent(ipodContainer)
    .style('width', '600px')
    .style('height', '600px')
    .style('overflow', 'hidden')
    .style('overflow-hidden', 'background')
    .style('overflow-y', 'scroll')
    .style('overflow-y', 'auto') 
    .style('scrollbar-width', 'none')
    .style('margin', '100px auto')
    .style('padding', '2px')
    .style('background', '#e0e0e0')
    .style('border', '4px solid #000')
    .style('border-radius', '2px')
    .style('position', 'relative')
    .style('z-index', '2');

    // Title
    createDiv('Informational Questions')
      .style('font-size', '18px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('margin-bottom', '15px')
      .style('color', '#333')
      .parent(containerDiv);

    // Subtitle
    createDiv(
      'Based on your prior responses, responses to these questions are required.'
    )
      .style('font-size', '14px')
      .style('margin-bottom', '20px')
      .style('color', '#666')
      .parent(containerDiv);

    // Crypto-currency transactions
    cryptoCheckbox = createCheckbox(
      'Do you have any crypto-currency transactions?',
      false
    )
      .style('margin-bottom', '10px')
      .style('font-size', '14px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('color', '#333')
      .parent(containerDiv);

    // Financial interest in a foreign account
    foreignAccountCheckbox = createCheckbox(
      'At any time in this year, did you have a financial interest in or signature authority over a financial account such as a bank account, securities account, or brokerage account located in a foreign country?',
      false
    )
      .style('margin-bottom', '10px')
      .style('font-size', '14px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('color', '#333')
      .parent(containerDiv);

    // Foreign trust transactions
    foreignTrustCheckbox = createCheckbox(
      'During this tax year, did you receive a distribution from, or were you the grantor of, or a transferor to, a foreign trust?',
      false
    )
      .style('margin-bottom', '20px')
      .style('font-size', '14px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('color', '#333')
      .parent(containerDiv);

    // Buttons container
    let buttonContainer = createDiv()
      .style('display', 'flex')
      .style('justify-content', 'space-between')
      .style('margin-top', '20px')
      .parent(containerDiv);

    // Previous button
    previousButton = createButton('PREVIOUS')
    .style('padding', '10px 2px')
    .style('background', '#eee')
    .style('font-family', 'myriad-pro, sans-serif')
    .style('font-weight', 'bold')
    .style('border', 'none')
    .style('border-radius', '3px')
    .style('cursor', 'pointer')
    .style('margin-top', '10px')
      .parent(buttonContainer)
      .mousePressed(() => {
        clickSound.play();
        this.removeElements();
        mgr.showScene(RefundScene); // Navigate back to RefundScene
      });

    // Save and Continue button
    saveButton = createButton('SAVE AND CONTINUE')
    .style('padding', '10px 2px')
    .style('background', '#28a745')
    .style('font-family', 'myriad-pro, sans-serif')
    .style('font-weight', 'bold')
    .style('color', '#fff')
    .style('border', 'none')
    .style('border-radius', '3px')
    .style('margin-top', '10px')
    .style('cursor', 'pointer')
      .parent(buttonContainer)
      .mousePressed(() => {
        clickSound.play();


        this.removeElements();
        mgr.showScene(ResultScene);
      });
  };

  this.draw = function () {
    background(220);
  };

  this.exit = function () {
    this.removeElements();
  };

  this.removeElements = function () {
    if (containerDiv) containerDiv.remove();
  };
}

// Scene: Result
function ResultScene() {
  let containerDiv;
  let previousButton, createFederalButton;

  this.enter = function () {
    background(220);

    // Create container
    containerDiv = createDiv()
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .parent(ipodContainer)
    .style('width', '600px')
    .style('height', '600px')
    .style('overflow', 'hidden')
    .style('overflow-hidden', 'background')
    .style('overflow-y', 'scroll')
    .style('overflow-y', 'auto') 
    .style('scrollbar-width', 'none')
    .style('margin', '100px auto')
    .style('padding', '2px')
    .style('background', '#e0e0e0')
    .style('border', '4px solid #000')
    .style('border-radius', '2px')
    .style('position', 'relative')
    .style('z-index', '2');

    // Title
    createDiv('Summary')
      .style('font-size', '18px')
      .style('margin-bottom', '20px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('margin-bottom', '15px')
      .style('color', '#333')
      .parent(containerDiv);

    // Federal Section Title
    createDiv('Federal')
      .style('font-size', '14px')
      .style('margin-bottom', '20px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('font-weight', 'bold')
      .style('margin-bottom', '10px')
      .style('color', '#333')
      .parent(containerDiv);

    // Print Copy to File Section Title
    createDiv('Print Copy to File')
      .style('font-size', '14px')
      .style('margin-bottom', '20px')
      .style('font-family', 'myriad-pro, sans-serif')
      .style('margin-bottom', '10px')
      .style('color', '#333')
      .parent(containerDiv);


    // Create Federal Button
    createFederalButton = createButton('CREATE FEDERAL 1040')
      .style('padding', '10px 20px')
      .style('background', '#28a745')
      .style('color', '#fff')
      .style('border', 'none')
      .style('border-radius', '5px')
      .style('cursor', 'pointer')
      .parent(containerDiv)
      .mousePressed(() => {
        dingSound.play();
        console.log('Creating Federal 1040...');
        // Functionality to generate and download the 1040 form can be implemented here
        generateFederal1040();
      });

    // Buttons container
    let buttonContainer = createDiv()
      .style('display', 'flex')
      .style('justify-content', 'flex-start')
      .style('margin-top', '20px')
      .parent(containerDiv);

    // Previous Button
    previousButton = createButton('PREVIOUS')
    .style('padding', '10px 2px')
    .style('background', '#eee')
    .style('font-family', 'myriad-pro, sans-serif')
    .style('font-weight', 'bold')
    .style('border', 'none')
    .style('border-radius', '3px')
    .style('cursor', 'pointer')
    .style('margin-top', '10px')
      .parent(buttonContainer)
      .mousePressed(() => {
        clickSound.play();
        this.removeElements();
        mgr.showScene(InfoScene); // Navigate back to InfoScene
      });
  };

  this.draw = function () {
    background(220);
  };

  this.exit = function () {
    this.removeElements();
  };

  this.removeElements = function () {
    if (containerDiv) containerDiv.remove();
  };

  function generateFederal1040() {
    let { jsPDF } = window.jspdf;
    let doc = new jsPDF();
  
    // Title
    doc.setFontSize(16);
    doc.text("Federal 1040 Tax Form", 20, 20);
  
    // Personal Information
    doc.setFontSize(12);
    doc.text("Personal Information", 20, 40);
    doc.text(`Name: ${taxData.personalInfo.firstName} ${taxData.personalInfo.lastName}`, 20, 50);
    doc.text(`SSN: ${taxData.personalInfo.ssn}`, 20, 60);
    doc.text(`Date of Birth: ${taxData.personalInfo.dob}`, 20, 70);
  
    // Refund Info
    doc.text("Refund Information", 20, 90);
    doc.text(`Routing Number: ${taxData.refundInfo.routingNumber}`, 20, 100);
    doc.text(`Account Number: ${taxData.refundInfo.accountNumber}`, 20, 110);
    doc.text(`Account Type: ${taxData.refundInfo.accountType}`, 20, 120);
  
    // Info Questions
    doc.text("Informational Questions", 20, 140);
    doc.text(`Crypto Transactions: ${taxData.infoQuestions.cryptoTransactions ? "Yes" : "No"}`, 20, 150);
    doc.text(`Foreign Account: ${taxData.infoQuestions.foreignAccount ? "Yes" : "No"}`, 20, 160);
    doc.text(`Foreign Trust: ${taxData.infoQuestions.foreignTrust ? "Yes" : "No"}`, 20, 170);
  
    // Save PDF
    doc.save("Federal1040.pdf");
  }
}
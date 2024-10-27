let buttons = [];
let lastButtonTime = 0;
let buttonInterval = 100; // Interval between button creation (ms)
let buttonClickCount = 0; // To track number of button clicks

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 255); // Set background color to blue
}

function draw() {
  // Get the current time (in milliseconds)
  let currentTime = millis();

  // Check if the interval has passed to create a new button
  if (currentTime - lastButtonTime > buttonInterval) {
    // Create a new button with initial text
    let button = createButton('Click me');
    button.position(random(width - 100), random(height - 40)); // Random button position

    // Set initial styles for the button
    styleButton(button);

    // Add a click event to the button
    button.mousePressed(() => {
      buttonClickCount++;
      button.html('Clicked!'); // Update button text on click
      button.style('background-color', '#00cc00'); // Change button color to green when clicked

      // Add more interaction: Make the button grow when clicked
      button.style('width', '150px');
      button.style('height', '50px');
      
      // Optional: Add more logic after multiple clicks
      if (buttonClickCount > 5) {
        buttonInterval = max(50, buttonInterval - 10); // Speed up button creation after 5 clicks
      }
    });

    buttons.push(button); // Store the button in the array for future reference

    // Update the last button creation time
    lastButtonTime = currentTime;
  }
}

// Helper function to style buttons
function styleButton(button) {
  // Initial styling for the button
  button.html('Close'); // Set new text for the button
  button.style('width', '100px'); // Set button width
  button.style('height', '40px'); // Set button height
  button.style('background-color', '#ff1a1a'); // Set button background color (red)
  button.style('border-radius', '25px'); // Rounded corners
  button.style('color', '#ffffff'); // Set text color to white
  button.style('border', '2px solid #000000'); // Add a black border
  button.style('font-family', 'Courier New'); // Change font to Courier New
  button.style('font-size', '20px'); // Set font size
  button.style('font-weight', 'bold'); // Set font to bold
}

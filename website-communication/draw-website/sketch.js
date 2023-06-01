let bgc = [244, 120, 44];

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvas");
  background(bgc);
}

function draw() {}

function mouseDragged() {
  circle(mouseX, mouseY, 20);
}

function doubleClicked() {
  background(bgc);
}

function keyTyped() {
  if (key === "s" || key === "S") {
    saveCanvas().then(saveAndSendDrawing);
  }
}

function saveAndSendDrawing() {
  // Save the drawing as an image
  saveCanvas('myDrawing', 'png');

  // Convert the saved image to a Base64-encoded data URL
  const canvasElement = document.getElementsByTagName('canvas')[0];
  const image = canvasElement.toDataURL('image/png');

  // Prepare the image data to send
  const data = {
    image: image,
  };

  // Send the image data to the Pin-Website
  fetch('http://pin-website.com/save-drawing', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        console.log('Drawing sent successfully');
        // Perform any additional actions after sending the drawing
      } else {
        console.error('Failed to send drawing');
        // Handle error case
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error case
    });
}

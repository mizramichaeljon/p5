const express = require('express');
const cors = require('cors');
const app = express();
const drawWebsitePort = 3000;
const pinWebsitePort = 4000;

let imageData;  // global variable to hold the image data
let savedImage;
// Middleware to parse JSON request body
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Handle the POST request to /save-drawing endpoint for the "draw-website"
app.post('/draw-website/save-drawing', (req, res) => {
  const { image } = req.body;

  // Save the image data to the global variable
  imageData = image;

  console.log('Received image from draw-website:', image);

  savedImage = req.body.image;
  // Send a response back to the "draw-website"
  res.sendStatus(200);
});

// Handle the GET request to /get-drawing
app.get('/get-drawing', (req, res) => {
  console.log('Received GET /get-drawing request');
  if (savedImage) {
    console.log('Sending saved image');
    res.json({ image: savedImage });
  } else {
    console.log('No drawing saved yet');
    res.json({ message: 'No drawing has been saved yet' });
  }
});




// Serve the "draw-website" and "pin-website" directories
app.use('/draw-website', express.static(__dirname + '/draw-website'));
app.use('/pin-website', express.static(__dirname + '/pin-website'));

// Start the server
app.listen(drawWebsitePort, () => {
  console.log(`Draw-Website server running on port ${drawWebsitePort}`);
});

app.listen(pinWebsitePort, () => {
  console.log(`Pin-Website server running on port ${pinWebsitePort}`);
});

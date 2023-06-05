const express = require('express');
const app = express();
const p5port = 3000;


// Serve the "draw-website" and "pin-website" directories
app.use('/p5', express.static(__dirname + '/public'));

// Start the server
app.listen(p5port, () => {
  console.log(`Draw-Website server running on port ${p5port}`);
});

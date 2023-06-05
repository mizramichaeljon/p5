const express = require('express');
const app = express();
const port = 3000; // Choose a port number of your choice

// Define a route to serve your website files

//osc-communication will be the web-address 
app.use('/osc-communication', express.static(__dirname + '/public'));


// Define routes for specific HTML pages
app.get('/osc-communication/index', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/osc-communication/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const osc = require('osc-js');
const app = express();
const port = 3000; // Choose a port number of your choice

// Define a route to serve your website files

//osc-communication will be the web-address 
app.use('/osc-communication',express.static('public'));


// Define routes for specific HTML pages
app.get('/osc-communication/second-page', (req, res) => {
  res.sendFile(__dirname + '/public/second-page.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Create an HTTP server
const server = http.createServer(app);

// Listen on port 8000
server.listen(8000, () => {
  console.log('Server listening on port 8000');
});

// Create a WebSocket server
const wss = new WebSocket.Server({
  server: server
});

wss.on('connection', (ws) => {
  const oscPlugin = new osc.WebsocketServerPlugin();

  oscPlugin.open();

  ws.on('message', (msg) => {
    const oscMsg = oscPlugin.parseBuffer(new Uint8Array(msg));
    oscPlugin.send(oscMsg, { host: 'localhost', port: 57121 });
  });

  ws.on('close', () => {
    oscPlugin.close();
  });
});

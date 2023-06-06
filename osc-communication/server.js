const express = require('express');
const { Server } = require('ws');
const OSC = require('osc-js');
const dgram = require('dgram');

const app = express();
const wss = new Server({ port: 8081 });

const config = { 
  udpClient: { 
    host: 'localhost',
    port: 57121
  } 
};

const osc = new OSC({ plugin: new OSC.BridgePlugin(config) });

osc.on('error', error => {
  console.error('An error occurred:', error);
});

wss.on('connection', ws => {
  ws.on('message', msg => {
    const data = JSON.parse(msg);
    const oscMessage = new OSC.Message(data.address);
    data.args.forEach(arg => oscMessage.add(arg.value, arg.type));
    
    const udpClient = dgram.createSocket('udp4');
    udpClient.send(Buffer.from(oscMessage.pack()), config.udpClient.port, config.udpClient.host, err => {
      if (err) console.error('Error sending UDP message:', err);
      udpClient.close();
    });
  });

  ws.on('close', () => {
    osc.close();
  });
});

app.use(express.static('public'));
app.listen(3000, () => console.log(`Server is running on http://localhost:3000`));

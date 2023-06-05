const { OscSender } = require('osc-js');

const sender = new OscSender({
    transport: {
        type: 'udp',
        port: 9000, // Set the port number as per your requirement
    },
    metadata: true, // Optional: include metadata with messages
});

const address = '/example';
const args = [123, 'Hello'];

sender.send({ address, args });

const receiver = new OscReceiver({ port: 9001 }); // Set the port number as per your requirement

receiver.on('/example', (message) => {
  console.log('Received OSC message:', message);
});

receiver.open();

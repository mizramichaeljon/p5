let socket;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas');
    // Set up a WebSocket connection to our server
    socket = new WebSocket('ws://localhost:8000');

}

function draw() {
    background(255, 64, 64);
}


function mousePressed() {
    // Define an OSC message
    const oscMessage = new osc.default.Message('/test', mouseX, mouseY);

    // Convert OSC message to a Uint8Array (binary data)
    const binaryOscMessage = osc.default.writePacket(oscMessage);

    // Send OSC message over WebSocket
    socket.send(binaryOscMessage.buffer, { binary: true });
}
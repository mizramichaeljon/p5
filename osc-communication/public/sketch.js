let socket;

function setup() {
  createCanvas(400, 400).parent('canvas');
  socket = new WebSocket('ws://localhost:8081');
  
  socket.onopen = () => console.log('Connected to WebSocket');
  socket.onclose = () => console.log('Disconnected from WebSocket');
}

function draw() {
  background(255, 64, 64);
}

function mousePressed() {
  if (socket.readyState === WebSocket.OPEN) {
    const message = {
      address: '/test',
      args: [
        { type: 'f', value: mouseX },
        { type: 'f', value: mouseY }
      ]
    };
    socket.send(JSON.stringify(message));
  }
}

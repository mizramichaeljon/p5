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
  if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
    if (socket.readyState === WebSocket.OPEN) {
      const message = {
        address: '/pressed',
        args: [
          { type: 'f', value: mouseX },
          { type: 'f', value: mouseY }
        ]
      };
      socket.send(JSON.stringify(message));
    }
  }
}

function mouseDragged() {
  if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
    if (socket.readyState === WebSocket.OPEN) {
      const message = {
        address: '/dragged',
        args: [
          { type: 'f', value: mouseX },
          { type: 'f', value: mouseY }
        ]
      };
      socket.send(JSON.stringify(message));
    }
  }
}

function keyTyped() {
  if (socket.readyState === WebSocket.OPEN) {
    const message = {
      address: '/key',
      args: [
        { type: 'c', value: key },
      ]
    };
    socket.send(JSON.stringify(message));
  }
}

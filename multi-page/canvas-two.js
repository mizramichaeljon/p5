let x = 0;
let diameter = 20;
function setup() {
    let canvas =  createCanvas(400, 400);
    canvas.position((windowWidth - width )* 0.5,(windowHeight - height )* 0.5)
}

function draw() {
    background(220);
    circle(x, 20, diameter);
    x++;
  
    // Optionally, if the circle has moved off the right side of the canvas, redirect back to the first page
    if (x > width + diameter / 2) {
      window.location.href = 'first-page.html';
    }
}
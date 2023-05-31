let x = 0;
let diameter = 20;
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.position((windowWidth - width) * 0.5, (windowHeight - height) * 0.5)
}

function draw() {
    background(220);
    circle(x, 20, diameter);
    if (x > width + diameter / 2) {
        // Redirect to the second page
        window.location.href = 'second-page.html';
    }
    x++;
}
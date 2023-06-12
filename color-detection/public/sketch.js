let bgc = [244, 50, 44];
let vid;

function setup() {
  noCanvas();
  vid = createVideo('assets/ocean-waves.mp4', vidLoad).parent('canvas');
  vid.size(400,400);
}

function vidLoad(){
  vid.loop();
  vid.volume(0);
}

function draw() {}

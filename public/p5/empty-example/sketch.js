var button = document.getElementById("button");

let input;
let analyzer;



function setup() {
    button.addEventListener('click', function(){
        createCanvas(710, 200);
        background(255);

        // Create an Audio input
        input = new p5.AudioIn();
        input.start();
    });
}

function draw() {
   // console.log('draw');
   // button.addEventListener('click', function(){
  // Get the overall volume (between 0 and 1.0)
    if (input) {
    let volume = input.getLevel();

      // If the volume > 0.1,  a rect is drawn at a random location.
      // The louder the volume, the larger the rectangle.
      let threshold = 0.1;
      if (volume > threshold) {
        stroke(0);
        fill(0, 100);
        rect(random(40, width), random(height), volume * 50, volume * 50);
      }

      // Graph the overall potential volume, w/ a line at the threshold
      let y = map(volume, 0, 1, height, 0);
      let ythreshold = map(threshold, 0, 1, height, 0);

      // noStroke();
      fill(175);
      rect(0, 0, 20, height);
      // Then draw a rectangle on the graph, sized according to volume
      fill(0);
      rect(0, y, 20, y);
      stroke(0);
      line(0, ythreshold, 19, ythreshold);
        console.log(volume);
    }
  //  });
}

// cloudflare pass 
//501398126sea-WA
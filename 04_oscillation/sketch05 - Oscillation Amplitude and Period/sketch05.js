function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(255);

    var period = 120;
    var amplitude = 250;

    var x = amplitude * sin(TWO_PI * frameCount / period);

    stroke(0);
    strokeWeight(3);
    fill('#ff0244');
    translate(width / 2, height / 2);
    line(0, 0, x, 0);
    ellipse(x, 0, 48, 48);
}
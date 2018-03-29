var r = 30;
var theta = 0;
var period = 100;
var amplitude = 20;

function setup() {
	createCanvas(800, 640);
	background(255);
}

function draw() {
	var x = r * cos(theta);
	var y = r* sin(theta);

	noStroke();
	fill('#ff0244');

	ellipse(x + width / 2, y + height / 2, 3, 3);

	theta += 0.01;

	r = amplitude * sin(TWO_PI * frameCount / period) + 150;

		
}
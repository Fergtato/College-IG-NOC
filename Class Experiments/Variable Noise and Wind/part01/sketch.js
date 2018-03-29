var wind;
var angle;
var time = 1000;

function setup() {
	createCanvas(600,600);
}

function draw() {
	background(255);

	angle = map(noise(time),0,1,0,360);

	wind = p5.Vector.fromAngle(radians(angle));
	wind.mult(100);

	strokeWeight(2);
	line(300, 300, 300+wind.x, 300+wind.y);

	time += 0.01;

}
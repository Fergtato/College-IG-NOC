var mover;

function setup() {
	createCanvas(600,600);

	//Mover(xlocation, ylocation, xveloctiy, yvelocity, xacceleration, yacceleration, mass)
	mover = new Mover(200, 200, 2, 1, 0, 0, 20)
}

function draw() {
	background(255);

	mover.checkEdges();
	mover.update();
	mover.display();
}
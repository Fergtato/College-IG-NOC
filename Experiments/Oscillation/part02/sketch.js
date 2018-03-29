var mover;

function setup() {
	createCanvas(640,480);
	mover = new Mover(10, 10, 0, 0, 0, 0, 20)
}

function draw() {
	background(220);

	var wind = createVector(0.4, 0.6);

	mover.update();
	mover.checkEdges();
	mover.applyForce(wind);
	mover.display();

}
var mover;
var liquid;

function setup() {
	createCanvas(600,600);

	//Mover(xlocation, ylocation, xveloctiy, yvelocity, xacceleration, yacceleration, mass)
	mover = new Mover(100, 10, 2, 0, 0, 0, 20)

	//Liquid(xloction, ylocation, width, height, coefDrag, r,g,b, opacity)
	liquid = new Liquid(0, 200, 600, 200, 1, 0,0,255,200);
}

function draw() {
	background(255);

	var gravity = createVector(0, 0.3 * mover.mass);
		mover.applyForces(gravity);

	if (liquid.contains(mover)) {
		var dragForce = liquid.calculateDrag(mover);
		mover.applyForces(dragForce);
		// console.log(dragForce);
	}

	liquid.display();

	mover.checkEdges();
	mover.update();
	mover.display();
}
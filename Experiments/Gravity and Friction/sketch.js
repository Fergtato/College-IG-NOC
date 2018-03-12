var movers = [];
var numOfMovers = 20;

function setup() {
	createCanvas(800,600);

	for (var i = 0; i < numOfMovers; i++) {
		movers[i] = new Mover(Math.floor(random(5,20)));
	}
}

function draw() {
	background('rgba(255,255,255,0.8)');

	for (var i = 0; i < numOfMovers; i++) {

		var wind = createVector(0.1, 0);
		var gravity = createVector(0, 0.2 * movers[i].mass);

		var c = 0.5;
		var normal = 1;
		var frictionMag = c * normal;
		var friction = p5.Vector.mult(movers[i].velocity, -1);
		friction.normalize();
		friction.mult(frictionMag);

		movers[i].applyForce(friction);
		// movers[i].applyForce(wind);
		// movers[i].applyForce(gravity);
		
		movers[i].checkEdges();
		movers[i].update();
		movers[i].display();
	}
}


var mover;
var liquid;

function setup() {
	createCanvas(600,600);

	//Mover(xlocation, ylocation, xveloctiy, yvelocity, xacceleration, yacceleration, mass)
	mover = new Mover(200, 200, 2, 1, 0, 0, 20)

	//Liquid(xloction, ylocation, width, height, coefDrag, r,g,b, opacity)
	liquid = new Liquid(0, 400, 600, 200, 0, 0,0,255,0.5);
}

function draw() {
	background(255);

	if (liquid.contains(mover)) {
		console.log("liquid contains mover");
	}

	liquid.display();

	mover.checkEdges();
	mover.update();
	mover.display();
}
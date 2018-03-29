var movers = [];

function setup() {
	createCanvas(640,480);
	for(var i = 0; i < 20; i++) {
		movers[i] = new Mover();
	}
	
}

function draw() {
	background('#2d2d2d');

	for(var i = 0; i < 20; i++) {
		movers[i].update();
		movers[i].display();
	}

}
var movers = [];

function setup() {
	createCanvas(1920,1080);
	for (var i = 0; i < 80; i++) {
		movers[i] = new Mover();
	}
}

function draw() {
	background('rgba(255,255,255,0.4)');
	for (var i = 0; i < movers.length; i++) {
		movers[i].render();
		movers[i].update();
		movers[i].checkEdges();
	}
	
}


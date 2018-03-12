var windchimes = [];
var movers = [];

function setup() {
    createCanvas(650, 650);
    //_xpos, _ypos, _scale, _windMag, _startAngle, _endAngle
    windchimes[0] = new WindChime(50,50, 0.6, 3, 0, 90);
    windchimes[1] = new WindChime(600,50, 0.6, 4, 90, 270);
    windchimes[2] = new WindChime(50,550, 0.6, 5, 180, 270);
    windchimes[3] = new WindChime(600,550, 0.6, 4, 270, 360);

    // x, y, vx, vy, ax, ay, m
    for (var x = 0; x < 100; x++) {
	    movers[x] = new Mover(random(0,650),random(0,650),0,0,0,0,random(0,15));
	}
}

function draw() {
	background(255);


	

	for (var j = 0; j < movers.length; j++) {
		movers[j].update();
		movers[j].checkEdges();

		for (var i = 0; i < windchimes.length; i++) {	
			movers[j].applyForce(windchimes[i].windVec);
		}

		movers[j].display();
	}

	

	for (var i = 0; i < windchimes.length; i++) {
		windchimes[i].update();
		windchimes[i].display();
	}

	
	
}
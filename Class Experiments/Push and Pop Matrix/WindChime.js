function WindChime(_xpos, _ypos, _scale, _windMag, _startAngle, _endAngle) {

	this.xpos = _xpos;
	this.ypos = _ypos;
	this.scale = _scale;
	this.windMag = _windMag;
	this.startAngle = _startAngle;
	this.endAngle = _endAngle;
	this.windVec = createVector();
	this.time = 1000;

	this.update = function() {
		this.windDir = map(noise(this.time), 0, 1, this.startAngle, this.endAngle);
		this.windVec = p5.Vector.fromAngle(radians(this.windDir));
		this.windVec.mult(this.windMag);
		this.time += 0.01;
	}

	this.display = function() {
		push(); //PUSH

		translate(this.xpos, this.ypos);
		scale(this.scale);

		noStroke();
		fill(0);
		textSize(16);
		textAlign(CENTER);
		text("Magnitude: " + this.windMag, 0, 100);
		
		this.string = str(this.windVec.heading() * 180 / PI);
		text("Direction: " + this.string.substr(0,5), 0, 120);

		stroke(0);
		strokeWeight(3);
		fill(255);
		ellipse(0, 0, 150, 150);
		rotate(this.windVec.heading());
		line(-65, 0 , 65, 0);

		fill(0);
		triangle(50, -10, 65, 0, 50, 10);

		pop(); //POP
	}	
}
//x and y locations, xand y velocity, x and y acceleration, m is mass
function Mover(x, y, vx, vy, ax, ay, m) { 


	// this.x = 0;
	// this.y = 0;
	// this.vx = 0;
	// this.vy = 0;
	// this.ax = 0;
	// this.ay = 0;
	// this.m = 0;

	this.location = createVector(x, y);
	this.velocity = createVector(vx, vy);
	this.acceleration = createVector(ax, ay);
	this.mass = m;

	this.update = function () {
		this.velocity.add(this.acceleration);
		this.velocity.limit(10);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
	}

	this.display = function () {
		fill('red');
		noStroke();
		ellipse(this.location.x, this.location.y, this.mass, this.mass);
	}

	this.checkEdges = function () {
		if(this.location.x > width-m/2 || this.location.x < 0+m/2) {
			this.velocity.x *= -1;
		}
		if(this.location.y > height-m/2 || this.location.y < 0+m/2) {
			this.velocity.y *= -1;
		}
	}

	this.applyForces = function (force) {
		var f = p5.Vector.div(force, this.mass);
		this.acceleration.add(f);
	}

}
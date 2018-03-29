function Mover(x, y, vx, vy, ax, ay, m) { 

	this.location = createVector(x, y);
	this.velocity = createVector(vx, vy);
	this.acceleration = createVector(ax, ay);
	this.mass = m;

	this.angle = 0;
	this.aVelocity = 0;
	this.aAcceleration = 0.001;

	this.update = function () {
		this.velocity.add(this.acceleration);
		this.velocity.limit(10);
		this.location.add(this.velocity);
		this.acceleration.mult(0);


		this.aAcceleration = this.velocity.x;
		this.aVelocity += this.aAcceleration;
		this.aVelocity = constrain(this.aVelocity, -0.05, 0.05);
		this.angle += this.aVelocity;
	}

	this.display = function () {
		fill('red');
		noStroke();

		push();
		translate(this.location.x, this.location.y);
		rotate(this.angle);
		rectMode(CENTER);
		rect(0, 0, this.mass, this.mass);
		pop();
	}

	this.checkEdges = function () {
		if(this.location.x > width-m/2 || this.location.x < 0+m/2) {
			this.velocity.x *= -1;
		}
		if(this.location.y > height-m/2 || this.location.y < 0+m/2) {
			this.velocity.y *= -1;
		}
	}

	this.applyForce = function (force) {
		var f = p5.Vector.div(force, this.mass);
		this.acceleration.add(f);
	}

}
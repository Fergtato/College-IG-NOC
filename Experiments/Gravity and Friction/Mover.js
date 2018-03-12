function Mover(m) {

	this.location = createVector(Math.floor(random(width)), Math.floor(random(height)));
	this.velocity = createVector(0, 5);
	this.acceleration = createVector(0, 0);
	this.mass = m;

	this.update = function() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(10);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
	}

	this.display = function() {
		fill('red');
		noStroke();
		ellipse(this.location.x, this.location.y, this.mass, this.mass);
	}

	this.checkEdges = function() {
		if(this.location.x > width-m/2 || this.location.x < 0+m/2) {
			this.velocity.x *= -1;
		}
		if(this.location.y > height-m/2 || this.location.y < 0+m/2) {
			this.velocity.y *= -1;
		}
	}

	this.applyForce = function(force) {
		var f = p5.Vector.div(force, this.mass);
		this.acceleration.add(f);
	}

}
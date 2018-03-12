function Mover() {

	this.location = createVector(floor(Math.random()*width), floor(Math.random()*height));
	this.velocity = createVector(0, 0);
	this.acceleration = createVector(0, 0);
	this.color = color(88);

	this.render = function() {
		fill(this.color);
		ellipse(this.location.x, this.location.y, 8, 8);
	}

	this.update = function() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(17);
		this.location.add(this.velocity);

		var mouse = createVector(mouseX, mouseY);

		this.acceleration = p5.Vector.sub(mouse, this.location);
		this.acceleration.normalize();
	}

	this.checkEdges = function() {
		if (this.location.x > width || this.location.x < 0) {
			this.velocity.x = this.velocity.x * -1;
		}
		 if (this.location.y > height || this.location.y < 0) {
			this.velocity.y = this.velocity.y * -1;
		}
	}

}
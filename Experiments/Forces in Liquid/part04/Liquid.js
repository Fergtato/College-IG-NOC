function Liquid(x, y, w, h, c, r,g,b,o) {

	this.location = createVector(x, y);
	this.width = w;
	this.height = h;
	this.coefDrag = c;
	// this.color = color(r,g,b);

	this.display = function() {
		fill(r,g,b,o);
		rect(this.location.x, this.location.y, this.width, this.height);
	}

	this.contains = function(m) {
		return m.location.x > this.location.x 
		&& m.location.x < this.location.x + this.width 
		&& m.location.y > this.location.y 
		&& m.location.y < this.location.y + this.height;
	}

	this.calculateDrag = function(m) {
		var speed = m.velocity.mag();
		var dragMagnitude = this.coefDrag * speed * speed;

		var dragForce = p5.Vector.mult(m.velocity,-1);

		dragForce.normalize();
		dragForce.mult(dragMagnitude);
		// var dragForce = createVector(-1,0);
		return dragForce;
	}
}
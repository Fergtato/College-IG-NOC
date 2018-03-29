function Liquid(x, y, w, h, c, r,g,b,o) {

	this.location = createVector(x, y);
	this.width = w;
	this.height = h;
	this.coefDrag = c;
	this.color = color(r,g,b);

	this.display = function() {
		fill(this.color);
		rect(this.location.x, this.location.y, this.width, this.height);
	}

	this.contains = function(m) {

	}
}
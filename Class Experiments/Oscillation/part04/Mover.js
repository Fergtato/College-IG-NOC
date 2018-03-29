function Mover() {
    this.position = createVector(random(0,width), random(0, height));
    this.velocity = createVector(0, 0);
    this.acceleration;
    this.topspeed = random(2,6);

    this.update = function () {
        var mouse = createVector(mouseX, mouseY);
        var dir = p5.Vector.sub(mouse, this.position);
        dir.normalize();
        dir.mult(0.09);
        this.acceleration = dir;

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    };

    this.display = function () {
    	var angle = this.acceleration.heading();

        stroke('#ff0043');
        fill('#ff0043');

        push();
        translate(this.position.x, this.position.y);
        rectMode(CENTER);
        rotate(angle);
        rect(0, 0, 15, 5);
        triangle(5, -7, 5, 7, 18, 0);
        pop();

    };

    this.checkEdges = function () {
        if(this.position.x > width || this.position.x < 0) {
			this.velocity.x *= -1;
		}
		if(this.position.y > height || this.position.y < 0) {
			this.velocity.y *= -1;
		}
    };
};
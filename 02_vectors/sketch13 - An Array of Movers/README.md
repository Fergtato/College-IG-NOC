# An Array of Movers

Creating an array of multiple movers to move towards and swarm the mouse.

## The Code

### sketch.js

Instead of the normal singular mover we now have an array of multiple movers.

First declare the movers array.

```js
var movers = [];
```

In the setup() function have a for loop apending 20 movers to the movers array with the index of the array being the index of the for loop (i).

```js
function setup() {
	createCanvas(640, 360);
	for (var i = 0; i < 20; i++) {
		movers[i] = new Mover();
	}
}
```

In the draw() loop call the update() and display() methods for each mover using another for loop.

```js
function draw() {
	background(51);

	for (var i = 0; i < movers.length; i++) {
		movers[i].update();
		movers[i].display();
	}
}
```

### Mover.js

The mover class is the same as in the mouse follow sketch.

```js
function Mover() {

	this.location = createVector(floor(random(width)), floor(random(height)));
	this.velocity = createVector(3, 3);
	this.acceleration = createVector();

	this.update = function() {
		var mouse = createVector(mouseX, mouseY);

		this.acceleration = p5.Vector.sub(mouse, this.location);
		this.acceleration.setMag(0.5);

		this.velocity.add(this.acceleration);
		this.velocity.limit(10);
		this.location.add(this.velocity);
	}

	this.display = function() {
		noStroke();
		fill(255, 0, 0);

		ellipse(this.location.x, this.location.y, 20, 20);
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
```
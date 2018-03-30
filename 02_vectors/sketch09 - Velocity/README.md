# Velocity

Creating a mover object and giving the object a velocity and motion.

## The Code

### Mover.js

The mover object will have 2 attributes and 3 callable methods. The 2 attributes the mover will have are location and velocity.

Create a loction vector and give it random coordinates between 0 and the width and height. Then a velocity vector with x and y velocities of your choosing.

```js
this.location = createVector(random(width), random(height));
this.velocity = createVector(10, 5);
```

In the update() method of the mover add the velocity vector to the location vector to give it movement.

```js
this.update = function() {
	this.location.add(this.velocity);
}
```

Display the mover with the display() method using the declared location vector.

```js
this.display = function() {
	noStroke();
	fill(255, 0, 0);

	ellipse(this.location.x, this.location.y, 20, 20);
}
```

Also add a checkEdges() method to reverse the direction of the mover if it hits any of the sides of the canvas. This ensures we have more time to view the mover's behaviours rather than it just flying off the screen.

```js
this.checkEdges = function() {
	if (this.location.x > width || this.location.x < 0) {
		this.velocity.x = this.velocity.x * -1;
	}
	if (this.location.y > height || this.location.y < 0) {
		this.velocity.y = this.velocity.y * -1;
	}
}
```

### sketch.js

Declare the mover and create one instance of it in the setup() function.

```js
var mover;

function setup() {
	createCanvas(640, 360);
	mover = new Mover();
}
```

Call each of the mover's methods on loop in the draw() function also displaying a background so that the mover doesn't leave a trail.

```js
function draw() {
	background(51);

	mover.update();
	mover.checkEdges();
	mover.display();
}
```
# Apply Forces

Now that we know how to give the mover it's own acceleration and velocity we will now learn how to apply external forces to a mover affecting its movement.

## The Code

### sketch.js

Most stays the same in sketch.js except we add a wind force vector and call the applyForce() method of the mover passing in the declared wind force vector.

```js
function draw() {
	background(51);

	var wind = createVector(0.1, 0.01);

	mover.applyForce(wind);

	mover.display();
	mover.update();
	mover.checkEdges();
}
```

### Mover.js

In the Mover class add a method called applyForce(). This method is used to apply external forces to the movement of the mover.

We take the passed in force and set the acceleration to the value of this force.

```js
this.applyForce = function(force) {
	this.acceleration = force;
}
```

The acceleration is then added to the velocity of the mover when the update() method is called.

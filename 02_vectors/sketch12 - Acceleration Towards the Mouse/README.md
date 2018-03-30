# Acceleration Towards the Mouse

Giving the mover an acceleration in the direction of the mouse.

## The Code

Sketch.js stays the same as previous sketches.

### Mover.js

In the mover's update() method first declare the mouse loction vector.

```js
this.update = function() {
		var mouse = createVector(mouseX, mouseY);
```

Set the acceleration to the subtraction of the mover's location from the mouse location. This gets the direction of acceleration. Normalize the vector and multiply it to give it magnitude.

```js
		this.acceleration = p5.Vector.sub(mouse, this.location);
		this.acceleration.normalize();
		this.acceleration.mult(0.8);
```

Add acceleration to velocity and velocity to loction as usual.

```js
	this.velocity.add(this.acceleration);
	this.velocity.limit(10);
	this.location.add(this.velocity);
}
```

The mover will accelerate in the direction of the mouse.
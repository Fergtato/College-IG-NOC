# Force Accumulation

Creating to external forces, applying them to the mover and observing the results of two forces acting on an object at the same time.

## The Code

### sketch.js

This time in sketch.js we are creating a gravity force vector as well as the wind force vector. Then apply both forces to the mover using the spplyForce method in the Mover class.

```js
function draw() {
	background(51);

	var wind = createVector(0.1, 0);
	var gravity = createVector(0, 0.01);

	mover.applyForce(wind);
	mover.applyForce(gravity);

	mover.display();
	mover.update();
	mover.checkEdges();
}
```

### Mover.js

Mover.js stays the same as the previous sketch.
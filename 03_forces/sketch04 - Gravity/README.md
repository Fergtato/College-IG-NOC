# Gravity

Creating multiple movers of different sizes to demonstrate the different falling speeds in gravity of the different sizes.

## The Code

### sketch.js

Create an array of multiple movers as shown in previous sketches.

When creating the gravity vector for each mover multiply the force by the mass of the mover.

```js
var gravity = createVector(0, 0.1 * m);
```

### Mover.js

Multiplying the gravity force by the mass is then cancelled out when it is divided by the mass in the applyForce() method.

```js
this.applyForce = function(force) {
	var f = p5.Vector.div(force, this.mass);
	this.acceleration.add(f);
}
```

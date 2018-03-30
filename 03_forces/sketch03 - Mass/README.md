# Mass 

Intrdoucing a mass to the mover and observing how it affects the movement when forces are applied.

## The Code

### sketch.js

When creating the mover in the setup pass in a value for the mass of the mover.

```js
function setup() {
	createCanvas(640, 640);
	mover = new Mover(5);
}
```

### Mover.js

First set the attribute mass to the passed in value m.

```js
this.mass = m;
```

When displaying the ellipse use the mass for it's size for a visual representation of the mass.  
Multiply the mass for a noticable size difference.

```js
this.display = function() {
	noStroke();
	fill(255, 0, 0);

	ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);
}
```

When applying the external forces to the mover declare a new f force as the passed in force divded by the mass of the mover then add this f force to the acceleration of the mover causing the forces to have less of an effect on movers with a higher mass.

```js
this.applyForce = function(force) {
	var f = p5.Vector.div(force,this.mass);
	this.acceleration.add(f);
}
```
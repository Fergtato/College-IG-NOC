# Acceleration 2

Giving the mover a randomly generated acceleration in a random direction.

## The Code

Sketch.js stays the same as previous sketches.

### Mover.js

When declaring the movers acceleration we give it a random 2D vector using the built in P5 function p5.Vector.random2D().

```js
this.acceleration = p5.Vector.random2D();
```

This creates a random vector with a large magnitude so we need to first divide that vector using the div() function to make the mover move slower.

```js
this.acceleration.div(15);
```

The mover will attempt to accelerate in the direction of the randomly generated vector.
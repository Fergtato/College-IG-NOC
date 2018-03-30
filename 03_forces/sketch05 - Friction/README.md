# Friction

Calculating and applying an external friction force to the mover to slow it down over time.

## The Code  

### sketch.js

Define the coefficient of friction (c). Different surfaces have different coefficients.

```js
var c = 0.5;
```

Define the normal (normal). This is the opposing force to the object on the surface.

```js
var normal = 1;
```

Calulate the friction magnitude by multiplying the coefficient by the normal.

```js
var frictionMag = c * normal;
```

Find the direction of friction, multiply it by the calculated friction magnitude and apply it to the mover.

```js
var friction = p5.Vector.mult(mover.velocity, -1);
friction.normalize();
friction.mult(frictionMag);

mover.applyForce(friction);
```


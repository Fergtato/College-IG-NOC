# Acceleration

Giving the mover an increasing acceleration and adding it to its velocity.

## The Code

Everything in sketch.js is the same as the previous sketch with just a few small additions to Mover.js.

### Mover.js

First add a new acceleration vector attribute to the mover giving it x and y acceleration values of your choosing.

```js
this.acceleration = createVector(0.03, 0.04);
```

In the update() method of the mover first add the acceleration to the velocity of the mover using the P5 add() fucntion.  
Then add this newly created velocity to the location vector of the mover same as in the previous sketch.  
You can also limit the velocity to stop it increasing too much.

```js
this.update = function() {
	this.velocity.add(this.acceleration);
	this.velocity.limit(10);
	this.location.add(this.velocity);
}
```

The mover will constantly attempt to accelerate towards the bottom righthand corner and will bounce off the sides.
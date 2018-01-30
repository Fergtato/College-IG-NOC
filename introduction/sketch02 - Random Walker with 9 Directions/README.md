# Random Walker with 9 Directions

In this file we've change the walker step method to allow the walker to move in 2 directions at once. This gives the walker 9 possible outcomes in the direction it can go.

We first randomly pick a stepx and stepy variable. These variables can have an outcome of -1, 0 or 1. Once these are picked the walkers x and y position are updated with these values.

```js
this.step = function() {

	var stepx = floor(random(-1,2));
	var stepy = floor(random(-1,2));

	this.x += stepx;
	this.y += stepy;


	this.x = constrain(this.x,0,width);
	this.y = constrain(this.y,0,height);
}
```

## Examples

If stepx = 1 and stepy = 0 the walker will move right

If stepx = 0 and stepy = -1 the walker will move up


If stepx = -1 and stepy = 1 the walker will move left and down
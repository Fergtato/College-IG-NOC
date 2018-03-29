# One Dimensional Noise

Walker movement based on noise.

## The Code

Setup the canvas and create a walker as done in previous files.

```js
var walker;

function setup() {
	createCanvas(1200,1000);
	background(127);
	walker = new Walker();
}
```

Draw function runs walkers step and render methods and displays semi-transparent box to create a blur effect.

```js
function draw() {
	fill(0, 15);
	rect(0, 0, width, height);

	walker.step();
	walker.render();
}
```

### The Walker

x is first declared at the centre of the canvas. xOff is a randomly genterated number between 0 and 1000.

```js
this.x = width/2;
this.xOff = random(1000);
```

In the step method we map the x variable to the width of the canvas using a noise function with the xOff variable. We then increment time giving the walker a smooth left to right random movement.

```js
this.render = function() {
	noStroke();
	fill(255, 45, 0, 50);
	ellipse(this.x, 500, 40, 40);
}

this.step = function() {
	this.x = map(noise(this.xOff), 0, 1, 0, width);
	this.xOff += 0.005;
}
```
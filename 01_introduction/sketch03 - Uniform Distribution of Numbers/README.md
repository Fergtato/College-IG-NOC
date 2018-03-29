# Uniform Distribution of Numbers 1

In this file we are showing how the built in random() function isn't true randomness. We show this by creating 20 bars and picking at 'random' which one to increase the height of by one pixel.

## The Code

First we create variables for random counters array and our total amount of bars.

```js
var randomCounts = [];
var total = 20;
```

In the setup() function we first create the canvas and then using a for loop we fill the randomCounts array with 20 values of 0.

```js
function setup() {
	createCanvas(640,360);
	for (var i = 0; i < total; i++) {
		randomCounts[i] = 0;
	}
}
```

In the draw() method we start with a background colour. We have this in draw so that it re-fills the background to stop overlapping.

```js
function draw() {
	background(127);
```

We then set the variable index to a random number between 0 and the total 20. And using this value we increase whatever bar is tied to this number in the array.

```js
	var index = floor(random(total));
	randomCounts[index]++;
```

We then draw the rectangles using a for loop to draw them from the left side to the width if the canvas.

```js
	stroke(0);
	strokeWeight(2);
	fill(255);

	var w = width/randomCounts.length;

	for (var x = 0; x < randomCounts.length; x++) {
		rect(x*w, height-randomCounts[x], w-1, randomCounts[x]);
	}
}
```
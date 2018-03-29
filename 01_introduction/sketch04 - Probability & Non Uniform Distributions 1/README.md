# Probability & Non Uniform Distributions 1

In this file we introduce the 'Walker' class. This acts as a so called blueprint for a walker or a 'wlaker maker' and allows us to create multiple walkers without having to write code to create each one in the draw() method.

## The Code

First we create the Walker class giving it attributes of postitions x and y. We can also make a render method which draws the Walker on the canvas. This is where we write the code for how it looks e.g. colour, stroke, size.

```js
function Walker() {

	this.x = width/2;
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x, this.y);
	}
```

We then make the step method for the Walker. This is called when we want the walker to take a step in a random direction. We create an empty array then assign a value of 1 or -1 to different indices of the array to decide the probability of direction when a random index is chosen. We then pick a random index from the array for the x and y directions and assign rx and ry to the value of that index.

```js
	this.step = function() {

		var probArray = [];
		probArray[1] = 1;
		probArray[2] = -1;
		probArray[3] = 1;
		probArray[4] = -1;
		probArray[0] = -1;

		var indexX = floor(random(probArray.length));
		var indexY = floor(random(probArray.length));
		var rx = probArray[indexX];
		var ry = probArray[indexY];
```

We then increment the x and y positions of the walker by the rx and ry values and constrain them within the canvas size. In our array we have more -1 values that 1 so the walker tends to go towards left and up.

```js
		this.x += rx;
		this.y += ry;

		this.x = constrain(this.x,0,width - 1);
		this.y = constrain(this.y,0,height - 1);
	}
}
```

We then create a new walker using the Walker class in the setup() and call its render and step methods in the draw()

```js
function setup() {
	createCanvas(320,640);
	background(127);
	walker = new Walker();
}

function draw() {
	walker.render();
	walker.step();
}
```
# One Dimensional Noise (Walker boy made some friends)

In this file we expend on the previous sketch making multiple walkers go in both the x and y dimensions.

## The Code

Instead of making only one walker we now create an array of walkers.  
Initialise the variables for the array and the number of walkers in the array. Then in the setup function declare the array and the number of walkers.  
A for loop creates a new walker using the Walker class for the amount defined in noOfWalkers.

```js
var walkers;
var noOfWalkers;

function setup() {
	createCanvas(1200,1000);
	noOfWalkers = 10;
	walkers = [];
	for (i = 0; i < noOfWalkers; i++) {
		walkers[i] = new Walker();
	}
	background(127);
}
```

In the draw funtion we run the tep and render methods for each walker in the array.

```js
function draw() {
	fill(0, 15);
	rect(0, 0, width, height);

	for (i = 0; i < noOfWalkers; i++) {
		walkers[i].step();
		walkers[i].render();
	}
}
```

### The Walker

Similar to the previous sketch we create a starting position and an xOff but for each dimension so we use vectors which store two values (Vectors will be discussed in the next chapter).

```js
function Walker() {

	this.position = createVector(width / 2, height / 2);
	this.noff = createVector(random(1000), random(1000));

	this.render = function() {
		noStroke();
		fill(255, 45, 0, 50);
		ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200),
		map(noise(this.noff.x), 0, 1, 20, 200));
	}

	this.step = function() {
		this.position.x = map(noise(this.noff.x), 0, 1, 0 - 200, width + 200);
		this.position.y = map(noise(this.noff.y), 0, 1, 0 - 200, height + 200);
		this.noff.add(0.005, 0.005);
	}
}
```
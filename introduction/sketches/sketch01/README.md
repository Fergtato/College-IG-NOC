# Random Walker with 4 Directions

In this file we are creating a basic random walker with 4 possible outcomes of which direction it can walk in.
We start off with the setup() and draw() methods for P5.

The setup method is run once at the start of the program to set things up like creating the canvas, setting a background colour and creating instances of an object.

```
function setup() {
	createCanvas(320,640);
	background(127);
	walker = new Walker();
}
```

The draw method is run on a loop, redrawing the canvas each time it is run. Tn this file we are using it to run the Walker methods called 'render' and 'step'.

```
function draw() {
	walker.render();
	walker.step();
}
```

## The Walker Class

In the walker class we first define some variables such as its starting x and y locations.

```
this.x = width/2;
this.y = height/2;
```

After this we have the render method which re-draws the walker at it's current location as a point.

```
this.render = function() {
	stroke(0);
	point(this.x, this.y);
}
```

Then we have the step method. We first choose a random number between 0 and 4 and round it up using the floor() function. Then using this number we can then move the walker up down left or right. We also constrain the x and y values to keep it within the canvas.

```
this.step = function() {

	var choice = floor(random(4));

	if (choice === 0) {
		this.x++;
	} else if (choice === 1) {
		this.x--;
	} else if (choice === 2) {
		this.y++;
	} else {
		this.y--;
	}

	this.x = constrain(this.x,0,width);
	this.y = constrain(this.y,0,height);
}	
```
# Gaussian Distribution & Standard Deviation

An example of gaussian distribution and standard distribution

## The Code

In the setup we only create the canvas and set the background.

```js
function setup() {
	createCanvas(640,360);
	background(127);
}
```

In the draw we first initialise the variable xloc and set it to a gaussian random number with a mean of 0 and a standard deviantion of 1.

```js
function draw() {
	
	var xloc = randomGaussian();
```
Create our own variable for the standard deviation as 60 and the mean as the middle of the canvas on the x-axis.

```js
	var sd = 60;
	var mean = width / 2;
```
Scale the gaussian number by the defined standard deviation and mean.

```js
	xloc = (xloc * sd) + mean;
```
This will display a majority of the ellipses within the center of the screen with the odd ellipse displaying further from the center.

Then style and display the ellipses vertically centered on the canvas.

```js
	fill(0, 10);
	noStroke();
	ellipse(xloc, height / 2, 16, 16);
}
```


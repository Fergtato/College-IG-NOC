# Understanding the Pixel Array in P5

Creating one filled pixel on the P5 pixel array.

## The Code

Create the canvas and set the pixel density in the setup function.

```js
function setup() {
	createCanvas(400,400);
	pixelDensity(1);
}
```

In the draw function load the pixels into the pixel array. Set the red value then update the array.

```js
function draw() {
	loadPixels();

	var index = (2+2*5)*4;
	pixels[index + 0] = 255;
	pixels[index + 1] = 0;
	pixels[index + 2] = 0;
	pixels[index + 3] = 255;

	updatePixels();
}
```
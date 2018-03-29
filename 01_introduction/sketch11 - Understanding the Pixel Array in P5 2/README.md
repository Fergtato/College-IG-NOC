# Understanding the Pixel Array in P5 2

Setting a colour value for each pixel in the pixel array.

## The Code

Setup function stays the same as pervious.

In the draw function we loop through each y pixel on the canvas. For each y pixel we also loop through each x pixel. For each pixel we calculate the index and set a colour value of red.

```js
function draw() {
	loadPixels();

	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var index = (x + y * width) * 4;
			pixels[index + 0] = 255;
			pixels[index + 1] = 0;
			pixels[index + 2] = 0;
			pixels[index + 3] = 255;
		}
	}

	updatePixels();
}
``` 
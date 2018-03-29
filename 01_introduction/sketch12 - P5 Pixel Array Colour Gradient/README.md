# P5 Pixel Array Colour Gradient

Creating a hue gradient using the P5 pixel array.

## The Code

Similar to the previous sketch except we increase the colour value depnding on the pixels x and y locations while looping through each pixel.

```js
function draw() {
	loadPixels();

	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var index = (x + y * width) * 4;
			pixels[index + 0] = x;
			pixels[index + 1] = 0;
			pixels[index + 2] = y;
			pixels[index + 3] = 255;
		}
	}

	updatePixels();
}
```
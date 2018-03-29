# Implementing 2D Noise in the Pixel Array

Creating a cloud like noise effect using the pixel array.

## The Code

This sketch is similar to the previous except we map the bright colour value using a noise function. This creates groups of lighter and darker colour thus giving a cloud like effect.

```js
function draw() {
	loadPixels();

	for (var y = 0; y < height; y++) {
		var xoff = 100.0;
		for (var x = 0; x < width; x++) {
			var index = (x + y * width) * 4;
			var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
			pixels[index + 0] = bright;
			pixels[index + 1] = bright;
			pixels[index + 2] = bright;
			pixels[index + 3] = 255;

			xoff += 0.02;
		}
		yoff += 0.02;
	}

	updatePixels();
}
```
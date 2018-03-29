# P5 Pixel Array TV Noise

Creating a TV noise effect using the P5 pixel array.

## The Code

Also similar to the previous two sketches except for each pixel we declare a random value between 0 and 255 and set the pixel to this colour giving a grey shade between black and white.  
This is looped each time cause the TV static effect.

```js
function draw() {
	loadPixels();

	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var index = (x + y * width) * 4;
			var bright = random(255);
			pixels[index + 0] = bright;
			pixels[index + 1] = bright;
			pixels[index + 2] = bright;
			pixels[index + 3] = 255;
		}
	}

	updatePixels();
}
```
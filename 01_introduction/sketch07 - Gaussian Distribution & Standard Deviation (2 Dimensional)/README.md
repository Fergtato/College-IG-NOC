# Gaussian Distribution & Standard Deviation (2 Dimensional)

In this file we are creating a second dimension to the gaussian distribution on the y axis.

## The Code

In the draw function a yloc is declared as well as the xloc.  
We also create seperate standard deviation and means for the x and y axis.

Scale the xloc and yloc using their related standard deviaton and mean.

```js
function draw() {
	
	var xloc = randomGaussian();
	var yloc = randomGaussian();

	var xsd = 100;
	var ysd = 40;

	var xMean = width / 2;
	var yMean = height /2;
	xloc = (xloc * xsd) + xMean;
	yloc = (yloc * ysd) + yMean;

	var rColor = 233;

	fill(rColor, 50);
	noStroke();
	ellipse(xloc, yloc, 16, 16);
}
```

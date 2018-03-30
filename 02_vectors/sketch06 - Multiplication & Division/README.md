# Multiplication & Division

Multiplying and Dividing the length of the line between the centre of the canvas and the mouse.

Using the built on P5 functions mult() and div().

## The Code

After setting up the line as in the previous sketch we can then look at multiplying or dividing the length of the line.

```js
var mouse = createVector(mouseX, mouseY);
var center = createVector(width/2, height/2);
var vectorLine = mouse.sub(center);
```

We can multiply the length of the line by 2 making it twice the distance between the centre and the mouse.

```js
vectorLine.mult(2);
```

We can also divide the length of the line by 2 making it half the length.

```js
vectorLine.div(2);
```

Using these functions we can change the line to any length we desire.
# Subtraction of Vectors

Creating a line between the mouse and a centre point.

## The Code

Define vectors for the mouse location and the centre of the canvas.

```js
var mouse = createVector(mouseX, mouseY);
var center = createVector(width/2, height/2);
```

Subtract the centre from the mouse position vector using the built in P5 sub() function and set to a new variable called vectorLine.

```js
var vectorLine = mouse.sub(center);
```

Translate the canvas to the centre and display the line using the vectorLine coordinates.

```js
translate(width /2, height /2);
strokeWeight(2);
stroke(255);
line(0, 0, vectorLine.x, vectorLine.y);
```
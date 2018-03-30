# Magnitude

Calculating the magnitude of a vector line and applying it to another element.

## The Code

Once the vector line has been created we can get its magnitude by using the built in P5 function mag() and apply it to a variable m.

```js
var m = vectorLine.mag();
```

Using this variable we can style and display a rectangle that represents the lines magnitude. We can use the magnitude as the rectangles width.

```js
fill(255);
stroke(0);
rect(0, 0, m, 10);
```
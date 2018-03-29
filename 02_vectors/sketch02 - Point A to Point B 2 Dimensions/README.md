# Point A to Point B in 2 Dimensions

Moving a mover in 2 dimensions at a defined speed.

## The Code

This time we set an x and y locations and an x and y speed.

```js
var x = 100;
var y = 100;
var xspeed = 2.5;
var yspeed = 2;
```

In the draw function increment the x and y locations by the defined speeds.

```js
x = x + xspeed;
y = y + yspeed;
```
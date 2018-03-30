# Normalising Vectors

Normalising our vector line between centre and mouse keeping it at a constant length.

## The Code

Once the vectorLine is created we use the built in P5 function normalize(). This reduces the line to a length of just one pixel pointing in the direction of our mouse.

```js
vectorLine.normalize();
```

We can then multiply then 1 pixel long line using the previously used mult() function. This allows us to set the line to a desired length.

```js
vectorLine.mult(50);
```

We can now see the line and it stays the same length even when moving the mouse further away.
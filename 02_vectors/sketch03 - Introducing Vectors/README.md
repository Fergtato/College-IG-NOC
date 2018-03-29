# Introducing Vectors

Moving a mover at a defined speed using vectors.

## The Code

Declare and initialise variables for the mover's position and velocity.

```js
var position;
var velocity;

function setup() {
	createCanvas(640, 360);
	position = createVector(100, 100);
	velocity = createVector(2, 2);
}
```

Increment position by velocity for both x and y. And reverse the direction if the mover hits an edge.

```js
position.x += velocity.x;
position.y += velocity.y;

if ((position.x > width) || (position.x < 0)) {
	velocity.x = velocity.x * -1;
}
if ((position.y > height) || (position.y < 0)) {
	velocity.y = velocity.y * -1;
}
```
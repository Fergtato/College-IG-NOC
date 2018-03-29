# Probability & Non Uniform Distributions 2

In this file we change the step method of the walker to use a randomly generated float between 0 and 1 then using this float we hardd code the probability of the walker going in each direction.

## The Code

In the step function we first initialise the variable r giving it a random value between 0 and 1.

```js
var r = random(1);
```

Once the random float has been decided we hard code each directions probability using if statments. For example we give the walker a 40% chance of moving right. 0 to 0.4 is 40% of the possible outcome between 0 and 1. We next say if r is less than 0.6 move left. This gives the left movement 20% chance because if it was less that 0.4 it would have already moved right and skiped this step so the possibility of 0.4 to 0.6 is 20%.

Right - 40% chance  
Left - 20% chance  
Up - 20% chance  
Down - 20% chance

```js
if (r < 0.4) {
	this.x++;
} else if (r < 0.6) {
	this.x--;
} else if (r < 0.8) {
	this.y++;
} else {
	this.y--;
}
``` 

This probability shows when we run the code and see that the walker tends to go more to the right.


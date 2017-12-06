# pizza_challenge
# Pizza Delivery

## Part 1

Maria is delivering pizzas to an infinite two-dimensional grid of houses. 
She begins by delivering a pizza to the house at her starting location; a dispatcher then calls via radio
and tells her where to move next. Moves are always exactly one house to the north (`^`), south (`v`), east (`>`), or west (`<`).
After each move, Maria delivers a pizza to the house at her new location. The dispatcher has been a little spacey lately, 
so Maria sometimes ends up delivering more than one pizza to the same house.

Here are some examples:

- `>` delivers pizzas to two houses: one to the house at the starting location, and one to the house directly east of the starting location.

- `^>v<` delivers pizzas to four houses in a square; the house at the starting/ending location ends up with two pizzas.

- `^v^v^v^v^v` delivers a bunch of pizzas to some very lucky people at only two houses.

Given the string of dispatcher inputs attached to this gist, how many houses receive at least one pizza?

## Part 2

The next day, to speed up the process, Maria rents a pizza-delivering goat named Clovis.
Maria and Clovis begin at the same starting location, and they both deliver a pizza to this starting house.
Maria and Clovis then take turns moving based on the dispatcher's instructions.

Here are some examples:

- `^v` now delivers pizzas to three houses; Maria goes north and Clovis goes south.

- `^>v<` now delivers pizzas to three houses; Maria and Clovis both end up back where they started.

- `^v^v^v^v^v` now delivers pizzas to 11 houses; Maria treks north and Clovis treks south.

Given the same string of dispatcher inputs as in Part One, how many houses receive at least one pizza?

## Guidelines for your solution

Please provide a solution to Part 1 and Part 2 in JavaScript (any flavor is acceptable) or CoffeeScript.

By design, this is a fairly simple exercise. We want to get a quick baseline on your coding proficiency, and 
we'll use your solution as the basis for discussion in a technical interview.

We'd like to see code that you consider production-quality. The best solutions will be elegant, as well as correct. Feel free to pull in any libraries you like. Extra points for a functional style.

### Submit your solution [here](https://goo.gl/forms/2nhFPtq95IAoEFJk1)

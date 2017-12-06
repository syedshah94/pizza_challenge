class PizzaPoint {
  constructor (x = 0, y = 0, num_pizzas = 0) {
    this.x = x;
    this.y = y;
    this.num_pizzas = num_pizzas;
  }
  nextPoint (direction) {
    let new_x = this.x;
    let new_y = this.y;
    if (direction === '^') {
      let new_pizza_point = new PizzaPoint(new_x, new_y += 1)
      new_pizza_point.num_pizzas++
      arr.push(new_pizza_point)
    }
    else if (direction === '>') {
      let new_pizza_point = new PizzaPoint(new_x += 1, new_y)
      new_pizza_point.num_pizzas++
      arr.push(new_pizza_point)
    }
    else if (direction === 'v') {
      let new_pizza_point = new PizzaPoint(new_x, new_y -= 1)
      new_pizza_point.num_pizzas++
      arr.push(new_pizza_point)
    }
    else if (direction === '<') {
      let new_pizza_point = new PizzaPoint(new_x -= 1, new_y)
      new_pizza_point.num_pizzas++
      arr.push(new_pizza_point)
    }
  }
}

//the starting home will always have been delivered a pizza

let starting = new PizzaPoint(0, 0, 1)
let arr = [starting]

arr.push(arr[0].nextPoint('^'))
arr.push(arr[1].nextPoint('^'))
console.log(arr)

// Exercise 1

const cart1 = [4, 30, 76, 100];
const cart2 = [1, 600, 56, 60];
const carts = [...cart1, ...cart2];
console.log(carts);//(2) [Array(4), Array(4)]

// carts[1][2] = 99;
carts[6] = 99
console.log(carts);//(2) [Array(4), Array(4)]
console.log(cart2);//(4) [1, 600, 99, 60]

cart1[2] = 75;
console.log(cart1);// (4) [4, 30, 75, 100]
console.log(carts);// (8) [4, 30, 76, 100, 1, 600, 99, 60]


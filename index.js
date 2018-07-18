const prompt = require('prompt');

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const game = (input) => {
  // place x or o on board based on input (1 - 9)
  // return grid
}; 

prompt.start();

if (x === true) {
  prompt.get(['x'], (err, result) => { // prompt x's choice
    x = false;
    game(result.x); // invoke game function with x's result
  });
} else {
  prompt.get(['o'], (err, result) => { // prompt o's choice
    x = true;
    game(result.o); // invoke game function with o's result
  });
}

// index.js

// Import the crypto module
const crypto = require('crypto');

// Retrieve the command line arguments
const args = process.argv.slice(2);

// Validate input
if (args.length < 1) {
  console.log("Please provide an operation and numbers.");
  process.exit(1);
}

// Get the operation from the first argument
const operation = args[0];

// Function to handle mathematical operations
const performCalculation = (operation, numbers) => {
  switch (operation) {
    case 'add':
      return numbers.reduce((acc, num) => acc + num, 0);
    case 'sub':
      return numbers.reduce((acc, num) => acc - num);
    case 'mult':
      return numbers.reduce((acc, num) => acc * num, 1);
    case 'divide':
      return numbers.reduce((acc, num) => acc / num);
    case 'sin':
      return Math.sin(numbers[0]);
    case 'cos':
      return Math.cos(numbers[0]);
    case 'tan':
      return Math.tan(numbers[0]);
    case 'random':
      const length = numbers[0];
      if (length === undefined) {
        console.log("Provide length for random number generation.");
        process.exit(1);
      }
      return crypto.randomBytes(length).toString('binary');
    default:
      console.log("Invalid operation");
      process.exit(1);
  }
};

// Extract numbers from arguments and convert to floats
const numbers = args.slice(1).map(Number);

// Validate the numbers
if (operation !== 'random' && numbers.some(isNaN)) {
  console.log("Please provide valid numbers.");
  process.exit(1);
}

// Perform the calculation and output the result
const result = performCalculation(operation, numbers);
console.log(`Result: ${result}`);

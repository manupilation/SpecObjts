const ano = 2000;
const preco = new Number(123);

//  isNan

Number.isNaN(ano); // false

// isInteger

Number.isInteger(ano); // true

// ParseFloat

const cem = '100'
Number.parseFloat(cem); // 100

// ParseInt

const decimal = 15.50
Number.parseInt(decimal); // 15

// toFixed

const boneca = 2.999
boneca.toFixed(2); // 3.00
console.log(boneca.toFixed(2));

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;

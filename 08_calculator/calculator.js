const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(A) {
	return A.reduce((tot, current) => {
    return tot + current;
  }, 0)
};

const multiply = function(A) {
  return A.reduce((tot, current) => {
    return tot * current;
  }, 1)
};

const power = function(a, b) {
	let temp = new Array(b).fill(a);
  return multiply(temp);
};

const factorial = function(a) {
	if (a === 0 || a === 1){
    return 1;
  }
  else{
    return a * factorial(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

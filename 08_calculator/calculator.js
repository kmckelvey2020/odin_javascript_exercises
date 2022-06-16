const add = function(a, b) {
	if(typeof a==='number' && typeof b==='number') {
    return a + b;
  } else return 'ERROR';
};

const subtract = function(a, b) {
	if(typeof a==='number' && typeof b==='number') {
    return a - b;
  } else return 'ERROR';
};

const sum = function(arr) {
	if(Array.isArray(arr) && arr.every((element) => typeof element==='number')) {
    return arr.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  } else return 'ERROR';
};

const multiply = function(arr) {
  if(Array.isArray(arr) && arr.every((element) => typeof element==='number')) {
    return arr.reduce((prev, curr) => {
      return prev * curr;
    }, 1);
  } else return 'ERROR';
};

const power = function(a, b) {
	if(typeof a==='number' && typeof b==='number') {
    return Math.pow(a, b);
  } else return 'ERROR';
};

const factorial = function(num) {
	if(typeof num==='number' && num>0) {
    let result = 1;
    for(let i=1; i<=num; i++) {
      result *= i;
    }
    return result;
  } else if(typeof num==='number' && num===0) {
    return 1;
  } else return 'ERROR';
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

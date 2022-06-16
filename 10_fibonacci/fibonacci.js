const fibonacci = function(number) {
 const num = Number(number);
 if(num>0) {
    if(num===1 || num===2) return 1;
    let prev1=1, prev2=1, fib;
    for(let i=3; i<=num; i++) {
        fib = prev1 + prev2;
        prev1 = prev2;
        prev2 = fib;
    }
    return fib;
 } else return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;

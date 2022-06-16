const sumAll = function(...numbers) {
    let result=0;
    numbers.sort((a,b) => a-b);
    if(numbers.every((element) => {
        return (typeof element==="number" && element>=0);
    })) {
        for(let i=numbers[0]; i<=numbers[numbers.length-1]; i++) {
            result += i;
        }
    }
    else {
        return 'ERROR';
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

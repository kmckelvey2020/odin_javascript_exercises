const removeFromArray = function(originalArr, ...targets) {
    if(Array.isArray(originalArr)) {
        const resultArr = originalArr.filter((element) => !targets.includes(element));
        return resultArr;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = removeFromArray;

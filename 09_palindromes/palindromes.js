const palindromes = function (str) {
    const forwardsStr = str.toString().toLowerCase().replace(/[^a-z]/g, '');
    const reverseStr = forwardsStr.split('').reverse().join('');
    if(`${forwardsStr}`===`${reverseStr}`) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;

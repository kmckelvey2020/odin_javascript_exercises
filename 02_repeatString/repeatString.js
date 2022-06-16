const repeatString = function(str, num) {
    let message='';
    if(typeof num==="number" && num>=0) {
        for(let i=0; i<num; i++) {
            message += `${str}`;
        }
        return message;
    } else return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;

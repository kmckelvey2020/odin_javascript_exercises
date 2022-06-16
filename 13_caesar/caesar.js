const caesar = function(str, num) {
    if(typeof num!=='number') return 'ERROR';
    return str.split('').map((element) => {
        // 65-90 uppercase, 97-122 lowercase Unicode alphabet
        let charCode = element.charCodeAt(0);
        if(charCode >= 65 && charCode <= 90) {
            charCode += (num%26);
            if(charCode < 65) charCode += 26;
            if(charCode > 90) charCode -= 26;
        }
        if(charCode >= 97 && charCode <= 122) {
            charCode += (num%26);
            if(charCode < 97) charCode += 26;
            if(charCode > 122) charCode -= 26;
        }
        return String.fromCharCode(charCode);
    }).join('');
};

// Do not edit below this line
module.exports = caesar;

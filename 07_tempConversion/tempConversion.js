const ftoc = function(fTemp) {
  if(typeof fTemp==='number') {
    return Number(((fTemp - 32) * 5/9).toFixed(1));
  } else return 'ERROR';
};

const ctof = function(cTemp) {
  if(typeof cTemp==='number') {
    return Number(((cTemp * 9/5) + 32).toFixed(1));
  } else return 'ERROR';
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

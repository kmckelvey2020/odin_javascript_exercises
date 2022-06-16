const findTheOldest = function(arr) {
    const today = new Date();
    const currYear = today.getFullYear();
    if(Array.isArray(arr) && arr.every((person) => person.yearOfBirth)) {
        const result = arr.reduce((prevPerson, currPerson) => {
            const prevAge = prevPerson.yearOfDeath ? prevPerson.yearOfDeath-prevPerson.yearOfBirth : currYear-prevPerson.yearOfBirth;
            const currAge = currPerson.yearOfDeath ? currPerson.yearOfDeath-currPerson.yearOfBirth : currYear-currPerson.yearOfBirth;
            if(prevAge>currAge) { 
                return prevPerson;
            } else return currPerson;
        });
        return result;
    } else return 'ERROR';
};

// Do not edit below this line
module.exports = findTheOldest;

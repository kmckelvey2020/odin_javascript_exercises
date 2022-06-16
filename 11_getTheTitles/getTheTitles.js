const getTheTitles = function(books) {
    if(Array.isArray(books)) {
        const titles = books.map((book) => {
            return book.title;
        })
        return titles;
    } else return 'ERROR';
};

// Do not edit below this line
module.exports = getTheTitles;

module.exports = {
    stockList: (listOfArt, listOfCat) => {
        if (!listOfArt.length || !listOfCat.length) {
            return '';
        }

        let books = {};
        let result = [];

        listOfArt.forEach((book) => {
            let [title, num] = book.split(" ");
            books[title[0]] = books[title[0]] ? (books[title[0]] += Number(num)) : Number(num);
        });

        listOfCat.forEach((letter) => {
            let num = books[letter] || 0;
            result.push(`(${letter} : ${num})`);
        });

        return result.join` - `;
    }
};

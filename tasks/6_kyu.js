function stockList(listOfArt, listOfCat) {

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

stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]);
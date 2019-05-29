module.exports = {
    balance: function (book) {
        let arrBook = bookToArray(book);

        arrBook[0][0] = numberFormat(arrBook[0][0], 2); //lead to a numeric format with 2 digits after comma
        let balance = parseFloat(arrBook[0][0]);
        let sumForAvg = 0;

        for (let i = 1; i < arrBook.length; i++) {
            arrBook[i][1] = arrBook[i][1].replace(/\W/g, ''); //replace everything except letters
            arrBook[i][2] = numberFormat(arrBook[i][2], 2);
            balance -= +arrBook[i][2];
            sumForAvg += +arrBook[i][2];
            arrBook[i].push('Balance ' + balance.toFixed(2));
        }

        arrBook.push(
            [`Total expense  ${(+arrBook[0][0] - balance).toFixed(2)}`], [`Average expense  ${(sumForAvg / (arrBook.length - 1)).toFixed(2)}`]
        );
        arrBook[0][0] = 'Original Balance: ' + arrBook[0][0];

        return bookToString(arrBook);

        function bookToString(array) {
            return array.map(e => e.join(' ')).join('\r\n');
        }

        function bookToArray(book) {
            return book.split('\n')
                .map(e => e.split(' '))
                .filter(e => e.toString() !== '');
        }

        function numberFormat(str, cur = 2) {
            str = str.replace(/[^\d+.]/g, '');
            str = (+str).toFixed(cur);
            return str;
        }
    },
    interp: function (f, l, u, n) {
        let arr = [];
        let d = (u - l) / n;
        for (let i = 0; i < n; i++) {
            arr.push(Math.floor(f(l) * 100) / 100);
            l = d + l;
        }
        return arr;
    },
    approximationPoint: (value) => {
        return value / (1 + Math.sqrt(1 + value));
    },
    mean: (town, data) => {
        let regTown = new RegExp("" + town + "\\W", 'gi')

        let searchTown = data.search(regTown);
        if (searchTown == -1) {
            myData.errorTown = -1;
            return -1
        } else {
            let startTownLine = data.indexOf(':', searchTown)
            let searchEndFallline = data.indexOf('\n', searchTown)
            let endTownLine = searchEndFallline == -1 ? data.length : searchEndFallline;
            let rainFallArr = data.slice(startTownLine, endTownLine).split(/\W\w\w\w\s/);
            rainFallArr.shift();
            myData.rainFall = rainFallArr;
            let avg = rainFallArr.reduce((acum, currentVal) => acum += (+currentVal), 0) / 12;
            myData.avgFall = avg;
            return (avg);
        }
    },
    variance: (town, data) => {
        let regTown = new RegExp("" + town + "\\W", 'gi')

        let searchTown = data.search(regTown);
        if (searchTown == -1) {
            myData.errorTown = -1;
            return -1
        } else {
            let startTownLine = data.indexOf(':', searchTown)
            let searchEndFallline = data.indexOf('\n', searchTown)
            let endTownLine = searchEndFallline == -1 ? data.length : searchEndFallline;
            let rainFallArr = data.slice(startTownLine, endTownLine).split(/\W\w\w\w\s/);
            rainFallArr.shift();
            myData.rainFall = rainFallArr;
            let avg = rainFallArr.reduce((acum, currentVal) => acum += (+currentVal), 0) / 12;
            myData.avgFall = avg;

            myData.varianceFall = myData.rainFall.reduce((acum, currentVal) => acum += Math.pow((currentVal - myData.avgFall), 2), 0) / 12;
            return myData.varianceFall;
        }
    },
    bouncingBall: (h, bounce, window) => {
        if (h > 0 && bounce > 0 && bounce < 1) {
            let count = 0;
            while (h > window) {
                h *= bounce;
                count += 2;
            }
            return count - 1;
        }
        return -1;
    },
    findNb: (m) => {
        var x = 0;
        while (m > 0) {
            x += 1;
            m = m - x ** 3;
        }

        return m ? -1 : x;
    },
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
}
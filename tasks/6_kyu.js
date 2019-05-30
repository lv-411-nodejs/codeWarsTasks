define(function () {
    return {
        balance: function (book) {
            const numberFormat = function(str, cur = 2) {
                str = str.replace(/[^\d+.]/g, '');
                str = (+str).toFixed(cur);
                return str;
            }

            let arrBook = book.split('\n')
                              .map(e => e.split(' '))
                              .filter(e => e.toString() !== '');;

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

            return arrBook.map(e => e.join(' ')).join('\r\n');
        }
    };
});

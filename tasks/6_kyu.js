function interp(f, l, u, n) {

    let d = (u - l) / n;
    for(let i = 0;i <= (l < u);i++) {
        if (n > 0) {
            let arr = [];
            arr.push(Math.floor(l * 100) / 100);
            arr.push(Math.floor((l + d)*100)/ 100);
            arr.push(Math.floor(((l + d) + (l + d))*100) / 100);
            arr.push(Math.floor((u - d)*100) / 100);
            return arr;
        }

    }

}


interp(x => x, 0, 9.0, 4);
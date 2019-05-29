module.exports = {
    interp: function (f, l, u, n) {
        let arr = [];
        let d = (u - l) / n;
        for(let i =0;i < n;i++){
         arr.push(Math.floor(f(l)* 100)/100);
         l = d + l;
     }
    return arr;
    }
}
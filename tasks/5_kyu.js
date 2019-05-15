function perimeter(n) {
    return 4 * fibonacci(n);
}

function fibonacci(n) {

    let init = 1;
    let res = 1;

    for (let i = 0; i <= n; i++) {
        let temp = res;
        res += init;
        init = temp;
    }
    return res - 1;
}


// -------------- 1 ----------------

function dutyFree(normPrice, discount, hol){
    let saving = normPrice * discount / 100;
    return Math.floor(hol / saving);
}
dutyFree(12, 50, 1000);

// -------------- 2 ----------------

function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
}

validateUsr('asddsa');
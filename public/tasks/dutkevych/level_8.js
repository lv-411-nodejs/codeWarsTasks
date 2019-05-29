module.exports = {
   
        dutyFree:  function(normPrice, discount, hol){
            let saving = normPrice * discount / 100;
            return Math.floor(hol / saving);
        },
        validateUsr: function(username) {
            return /^[0-9a-z_]{4,16}$/.test(username)
        }
    }




define(function() {
	return {
		squareOrSquareRoot: function(arr) {
			return arr.map((el) => {
				return Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : Math.pow(el, 2);
			})
		},
		fixTheMeerkat: function(arr) {
			return arr.reverse();
		}
	}
});

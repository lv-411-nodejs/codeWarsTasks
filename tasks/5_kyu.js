define(function() {
	return {
		zeros: function(n) {
			var i = 1;
			var result = 0;
			while (n / Math.pow(5, i) > 1) {
				result += Math.floor(n / Math.pow(5, i));
				i++;
			}
			return result;
		}
	}
});
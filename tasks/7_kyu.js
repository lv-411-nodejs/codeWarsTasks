define(function(){
	return {
		replicate: function(times, number) {
			return times>0 ? [number].concat(replicate(times-1, number)) : [];
		}
	}
});
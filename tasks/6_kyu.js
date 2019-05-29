define(function() {
	return {
		nba_cup: function(report, teamName) {
			var w = 0;
			var d = 0;
			var l = 0;
			var score = 0;
			var conceded = 0;
			var points = 0;
			let reg = new RegExp('\\b' + teamName + '\\b', 'ig');
			let games = report.split(',').filter((item) => {
				return item.match(reg);
			}).map((item) => {
				return item.trim().split(/\s*(\d+\.?\d*\b)\s*/).slice(0, -1);
			});
			if (games.length < 1) {
				return `${team}:This team didn't play!`
			}
			let sortgames = games.map((arr) => {
				return arr.indexOf(teamName) == 0 ? arr : arr = [arr[2], arr[3], arr[0], arr[1]];
			});
			sortgames.forEach((game) => {
				+game[1] > +game[3] ? w += 1 : (+game[1] < +game[3] ? l += 1 : d += 1)
				score += +game[1];
				conceded += +game[3];

			});
			return `${teamName}:W=${w};D=${d};L=${l};Scored=${score};Conceded=${conceded};Points=${w*3+d}`;
		}
	}
});

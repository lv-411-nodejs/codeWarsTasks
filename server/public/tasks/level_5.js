module.exports = {
	zeros: function (n) {
		var i = 1;
		var result = 0;
		while (n / Math.pow(5, i) > 1) {
			result += Math.floor(n / Math.pow(5, i));
			i++;
		}
		return result;
	},
	smallest: function (n) {
		let row = String(n).split("");
		let min = [n, 0, 0];
		let test = [];

		for (let i = 0, length = row.length; i < length; i++) {
			for (let j = 0; j < length; j++) {
				test = row.slice(0, i).concat(row.slice(i + 1));

				if (Number(test.slice(0, j).concat(row[i], test.slice(j)).join("")) < min[0]) {
					min = [Number(test.slice(0, j).concat(row[i], test.slice(j)).join("")), i, j];
				}
			}
		}

		return min;
	},
	movingShift: function (shift) {
		let s = "I should have known that you would have a perfect answer for me!!!";

		let abcLowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
		let abcUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

		let arr = s.split('').map(function (v) {

			if (shift >= 26) { shift = shift - 26; }
			let key = abcLowerCase.indexOf(v.toLowerCase()) + shift;
			if (key >= 26) { key = key - 26; }

			if (abcLowerCase.indexOf(v) >= 0) { v = abcLowerCase[key]; }
			if (abcUpperCase.indexOf(v) >= 0) { v = abcUpperCase[key]; }

			shift = shift + 1;
			return v;


		}).join('');

		let splitArr = [];

		for (let i = 0; i < 5; i++) {
			splitArr.push(arr.slice(i * Math.ceil(s.length / 5), (i + 1) * Math.ceil(s.length / 5)));
		}
		return splitArr;
	},

	demovingShift: function (shift) {
		let arr = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
		return arr.join('').split('').map(function (v) {

			if (shift >= 26) { shift = shift - 26; }

			let key = abcLowerCase.indexOf(v.toLowerCase()) - shift;
			if (key < 0) { key = key + 26; }


			if (abcLowerCase.indexOf(v) >= 0) { v = abcLowerCase[key]; }
			if (abcUpperCase.indexOf(v) >= 0) { v = abcUpperCase[key]; }

			shift = shift + 1;
			return v;
		}).join('');
	},
	artificialRain: (garden) => {
		const answers = [];

		const checkLeft = (position) => {
			if (position > 0) {
				let sum = 0;
				for (let i = position; i >= 0; i--) {
					if (garden[i - 1] <= garden[i]) {
						sum++
					} else {
						break;
					}
				}
				return sum;

			} else {
				return 0;
			}
		}

		const checkRight = (position) => {
			if (position > 0) {
				let sum = 0;
				for (let i = position, max = garden.length; i < max; i++) {
					if (garden[i + 1] <= garden[i]) {
						sum++
					} else {
						break;
					}
				}
				return sum;
			} else {
				return 0;
			}
		}

		const checkPosition = (position) => {
			const leftSum = checkLeft(position);
			const rightSum = checkRight(position)
			answers.push(1 + leftSum + rightSum);
		}

		for (let i = 0, max = garden.length; i < max; i++) {
			checkPosition(i);
		}

		return Math.max(...answers)
	},
	gap: (g, m, n) => {
		let unswer = [];
		let primeNumbers = [];
		primeNumbers.length = n + 1;
		primeNumbers.fill(0, 0, n + 1)
		for (let i = 2; i * i < n + 1; i++) {
			if (primeNumbers[i] == 0) {
				for (let k = i * i; k < n + 1; k += i) {
					primeNumbers[k] = 1
				}
			}
		}
		// let interimGap=0, interimNumber=m;
		while (m <= n + 1 - g) {
			if ((primeNumbers[m] == 0) && (primeNumbers[m + g] == 0)) {
				let isPrimeBetween = false;
				for (let f = m + 1; f <= (m + g - 1); f++) {
					if (primeNumbers[f] == 0) {
						isPrimeBetween = true;
					}
				}
				if (!isPrimeBetween) {
					unswer[0] = m; unswer[1] = m + g;
					return unswer;
					// break;
				} else {
					m++
				}
			} else {
				m++;
			}
		}
		return null;
	},
	productFibonacci: prod => {
		let a = 0, b = 1, c = 1;
		while ((a * b) !== prod) {
			if (a * b > prod) return [a, b, false];
			c = a + b;
			a = b;
			b = c;
		}
		return [a, b, true]
	},
	perimeter: (n) => {
		const fibonacci = (n) => {
			let init = 1;
			let res = 1;

			for (let i = 0; i <= n; i++) {
				let temp = res;
				res += init;
				init = temp;
			}
			return res - 1;
		};

		return 4 * fibonacci(n);
	}
}
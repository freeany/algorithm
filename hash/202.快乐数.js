/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	function getSum(n) {
		let sum = 0
		while (n) {
			sum += (n % 10) * (n % 10)
			n = Math.floor(n / 10)
		}
		return sum
	}

	let list = new Set()
	while (true) {
		const sum = getSum(n)
		if (sum == 1) return true

		if (list.has(sum)) {
			return false
		} else {
			list.add(sum)
		}
		n = sum
	}
}

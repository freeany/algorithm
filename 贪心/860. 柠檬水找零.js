/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
	let five = 0
	let ten = 0

	for (let i = 0; i < bills.length; i++) {
		const bill = bills[i]
		if (bill == 5) {
			five++
		} else if (bill == 10) {
			if (five == 0) return false
			five--
			ten++
		} else if (bill == 20) {
			if (five === 0 && ten === 0) return false
			if (ten) {
				if (five === 0) return false
				ten--
				five--
			} else if (five >= 3) {
				five -= 3
			} else {
				return false
			}
		}
	}
	return true
}

/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function (n) {
// 	while (n) {
// 		if (n == 1) return true
// 		if (n % 2 !== 0) {
// 			return false
// 		}
// 		n = n / 2
// 	}
// 	return false
// }

var isPowerOfTwo = function (n) {
	return n > 0 && (n & (n - 1)) === 0
}

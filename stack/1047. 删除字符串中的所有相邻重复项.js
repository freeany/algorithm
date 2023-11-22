/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
	const result = []
	for (const i of s) {
		if (i === result[result.length - 1]) {
			result.pop()
		} else {
			result.push(i)
		}
	}
	return result.join('')
}

/**
 * @param {string} digits
 * @return {string[]}
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/
var letterCombinations = function (digits) {
	const arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
	let len = digits.length
	if (len == 0) return []
	if (len == 1) return arr[digits].split('')

	let result = []
	let path = []

	function backtrack(startIndex) {
		if (path.length === len) {
			return result.push(path.join(''))
		}

		// 直接遍历，然后一一对应， 反正 === len的时候就直接push进去了
		for (const v of arr[digits[startIndex]]) {
			path.push(v)
			backtrack(startIndex + 1)
			path.pop()
		}
	}
	backtrack(0)
	return result
}

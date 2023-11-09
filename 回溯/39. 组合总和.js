/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	let result = []
	let path = []

	function backtrack(startIndex) {
		let sum = path.reduce((p, c) => (c += p), 0)
		if (sum > target) return
		if (sum == target) {
			return result.push([...path])
		}
		for (let i = startIndex; i < candidates.length; i++) {
			path.push(candidates[i])
			backtrack(i)
			path.pop()
		}
	}

	backtrack(0)
	return result
}

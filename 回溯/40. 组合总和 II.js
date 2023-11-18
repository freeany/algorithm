/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	candidates = candidates.sort((a, b) => a - b)
	let result = []
	let path = []
	let used = new Array(candidates.length).fill(false)

	function backtrack(startIndex, used) {
		const sum = path.reduce((pre, cur) => (cur += pre), 0)
		if (sum > target) return
		if (sum === target) {
			return result.push([...path])
		}
		for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
			if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) continue
			used[i] = true
			path.push(candidates[i])
			backtrack(i + 1, used)
			used[i] = false
			path.pop()
		}
	}
	backtrack(0, used)
	return result
}

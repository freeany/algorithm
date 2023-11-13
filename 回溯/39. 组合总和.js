/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	// 剪枝操作一： 排序
	candidates = candidates.sort((a, b) => a - b)
	let result = []
	let path = []

	function backtrack(startIndex) {
		let sum = path.reduce((p, c) => (c += p), 0)
		if (sum > target) return
		if (sum == target) {
			return result.push([...path])
		}
		// for (let i = startIndex; i < candidates.length; i++) {
		// 剪枝， 剪枝前先排序
		// 剪枝操作2，如果 当前项目 + sum > target 那就没有继续向下的意义了
		for (let i = startIndex; i < candidates.length && candidates[i] + sum <= target; i++) {
			path.push(candidates[i])
			backtrack(i)
			path.pop()
		}
	}

	backtrack(0)
	return result
}

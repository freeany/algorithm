/**
 * @param {number[]} nums
 * @return {number[][]}
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */
var subsets = function (nums) {
	let result = []
	let path = []

	function backtrack(startIndex) {
		result.push([...path])
		for (let i = startIndex; i < nums.length; i++) {
			path.push(nums[i])
			backtrack(i + 1)
			path.pop()
		}
	}
	backtrack(0)
	return result
}

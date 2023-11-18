/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	nums = nums.sort((a, b) => a - b)
	let result = []
	let path = []
	let used = new Array(nums.length)

	function backtrack(startIndex, used) {
		result.push([...path])

		for (let i = startIndex; i < nums.length; i++) {
			if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue
			path.push(nums[i])
			used[i] = true
			backtrack(i + 1, used)
			path.pop()
			used[i] = false
		}
	}
	backtrack(0, used)
	return result
}

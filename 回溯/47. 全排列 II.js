/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	nums = nums.sort((a, b) => a - b)
	let result = []
	let path = []
	let used = new Array(nums.length).fill(false)

	function backtrack(nums, used) {
		if (path.length === nums.length) {
			return result.push([...path])
		}
		for (let i = 0; i < nums.length; i++) {
			if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue
			if (used[i] === false) {
				path.push(nums[i])
				used[i] = true
				backtrack(nums, used)
				path.pop()
				used[i] = false
			}
		}
	}
	backtrack(nums, used)
	return result
}

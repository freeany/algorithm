/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let cover = 0

	// 每次下标只能在可覆盖的最大范围内移动
	for (let i = 0; i <= cover; i++) {
		cover = Math.max(i + nums[i], cover)
		if (cover >= nums.length) return true
	}
	return false
}

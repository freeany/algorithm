/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let left = 0
	let right = nums.length - 1

	let result = []
	while (left <= right) {
		let left2 = nums[left] * nums[left]
		let right2 = nums[right] * nums[right]

		if (left2 > right2) {
			result.unshift(left2)
			left++
		} else {
			result.unshift(right2)
			right--
		}
	}
	return result
}

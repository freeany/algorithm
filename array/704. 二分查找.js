/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0
	let right = nums.length - 1

	while (left <= right) {
		const middle = Math.floor((right - left) / 2) + left
		if (nums[middle] > target) {
			// 说明在左区间
			right = middle - 1
		} else if (nums[middle] < target) {
			left = middle + 1
		} else {
			return middle
		}
	}
	return -1
}

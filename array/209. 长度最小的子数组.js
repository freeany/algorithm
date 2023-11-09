/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let sum = 0
	let subLen = 0
	let startIndex = 0
	let result = Infinity

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		while (sum >= target) {
			subLen = i - startIndex + 1
			result = result < subLen ? result : subLen
			sum -= nums[startIndex++]
		}
	}
	return result == Infinity ? 0 : result
}

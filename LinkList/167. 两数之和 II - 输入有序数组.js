/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let left = 0
	let right = numbers.length - 1

	while (left <= right) {
		const leftNum = numbers[left]
		const rightNum = numbers[right]
		const sum = leftNum + rightNum
		if (sum === target) {
			return [left + 1, right + 1]
		} else if (sum < target) {
			left++
		} else if (sum > target) {
			right--
		}
	}
	return -1
}

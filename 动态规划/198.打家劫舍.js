/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	const dp = [nums[0]]
	dp[1] = Math.max(nums[0], nums[1])

	for (let i = 2; i < nums.length; i++) {
		dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
	}
	return dp[nums.length - 1]
}

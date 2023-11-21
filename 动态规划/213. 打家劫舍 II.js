/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length == 1) return nums[0]

	function rob1(nums) {
		const dp = [nums[0]]
		dp[1] = Math.max(nums[0], nums[1])

		for (let i = 2; i < nums.length; i++) {
			dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
		}
		return dp[nums.length - 1]
	}

	const left = rob1(nums.slice(1))
	const right = rob1(nums.slice(0, nums.length - 1))
	return Math.max(left, right)
}

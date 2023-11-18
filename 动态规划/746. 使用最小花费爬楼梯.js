/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	const dp = [0, 0]

	for (let i = 2; i < cost.length; i++) {
		console.log(dp[i - 2] + cost[i - 2])
		console.log(dp[i - 1] + cost[i - 1])
		dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + dp[i - 1])
		console.log(dp[i])
	}

	return dp[cost.length - 1]
}

minCostClimbingStairs([10, 15, 20])

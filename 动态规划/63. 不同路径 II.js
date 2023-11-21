/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	let m = obstacleGrid.length
	let n = obstacleGrid[0].length
	if (obstacleGrid[0][0] == 1 || obstacleGrid[m - 1][n - 1] == 1) return 0

	const dp = new Array(m)
	for (let i = 0; i < m; i++) {
		dp[i] = new Array(n).fill(0)
	}
	for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
		dp[i][0] = 1
	}

	for (let i = 0; i < m && obstacleGrid[0][i] == 0; i++) {
		dp[0][i] = 1
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			if (obstacleGrid[i][j] == 1) continue
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
		}
	}
	return dp[m - 1][n - 1]
}

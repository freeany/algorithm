/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 *
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 *  输入：n = 4, k = 2
    输出：
    [
      [2,4],
      [3,4],
      [2,3],
      [1,2],
      [1,3],
      [1,4],
    ]
 */
var combine = function (n, k) {
	let result = []
	let path = []

	function backtrack(startIndex) {
		if (path.length === k) {
			return result.push([...path])
		}

		// for (let i = startIndex; i <= n; i++) {
		// 剪枝操作，如果n = 4,k = 3, 那么如果要搜寻的少于3位，那么就没意义去搜寻了
		// k - path.length 是需要去寻找的个数, 剩余的个数是n - (k - path.length) + 1
		for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
			path.push(i)
			backtrack(i + 1)
			path.pop()
		}
	}
	backtrack(1)
	return result
}

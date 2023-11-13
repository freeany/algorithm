/**
 * @param {string} s
 * @return {string[][]}
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
 */
var partition = function (s) {
	let result = []
	let path = []
	function isPaildrome(s, l, r) {
		while (l < r) {
			if (s[l] !== s[r]) return false
			l++
			r--
		}
		return true
	}

	function backtrack(startIndex) {
		if (startIndex === s.length) {
			return result.push([...path])
		}
		for (let i = startIndex; i < s.length; i++) {
			if (!isPaildrome(s, startIndex, i)) continue
			path.push(s.slice(startIndex, i + 1))
			backtrack(i + 1)
			path.pop()
		}
	}
	backtrack(0)
	return result
}

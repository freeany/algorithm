/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// 定义l， r两个指针做滑动窗口
	let l = 0
	let result = 0
	const map = new Map()
	for (let r = 0; r < s.length; r++) {
		// 并且要找的元素在滑动窗口里面
		if (map.has(s[r]) && map.get(s[r]) >= l) {
			// 说明找到了重复元素
			l = map.get(s[r]) + 1
		}
		result = Math.max(result, r - l + 1)
		// 将每一个元素和其下标保存下来。
		map.set(s[r], r)
	}
	return result
}

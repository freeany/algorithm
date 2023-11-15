/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	// 1. 先对nums1进行去重
	let s = new Set(nums1)
	// 2. 定义结果集合
	let result = new Set()

	for (let i = 0; i < nums2.length; i++) {
		if (s.has(nums2[i])) {
			result.add(nums2[i])
		}
	}
	return [...result]
}

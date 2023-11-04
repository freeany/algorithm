/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	if (!Array.isArray(nums)) return null
	if (nums.length == 0) return null

	const midNodeIndex = Math.floor(nums.length / 2)
	const root = new TreeNode(nums[midNodeIndex])
	root.left = sortedArrayToBST(nums.slice(0, midNodeIndex))
	root.right = sortedArrayToBST(nums.slice(midNodeIndex + 1))
	return root
}

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
var constructMaximumBinaryTree = function (nums) {
	if (nums == null || nums.length === 0) return null
	const max = Math.max(...nums)
	const root = new TreeNode(max)
	const index = nums.indexOf(max)

	const leftNums = nums.slice(0, index)
	const rightNums = nums.slice(index + 1)
	root.left = constructMaximumBinaryTree(leftNums)
	root.right = constructMaximumBinaryTree(rightNums)

	return root
}

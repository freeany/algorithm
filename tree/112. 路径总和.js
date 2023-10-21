/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 *
 * 充分体现了回溯的逻辑
 * 这种代码需要精简
 *
 */
var hasPathSum = function (root, targetSum) {
	if (root == null) return false
	let sum = 0
	let flag = false
	const dsp = node => {
		sum += node.val
		if (node.left == null && node.right == null) {
			if (sum == targetSum) {
				flag = true
			}
			return
		}
		if (node.left) {
			dsp(node.left)
			sum -= node.left.val
		}
		if (node.right) {
			dsp(node.right)
			sum -= node.right.val
		}
	}

	dsp(root)
	return flag
}

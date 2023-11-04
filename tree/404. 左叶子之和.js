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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
	let sum = 0

	const dsp = (node, flag) => {
		if (node == null) return 0
		if (flag && node.left == null && node.right == null) {
			sum += node.val
		}
		dsp(node.left, true)
		dsp(node.right, false)
	}

	dsp(root, false)
	return sum
}

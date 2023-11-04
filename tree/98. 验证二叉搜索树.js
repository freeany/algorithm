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
 * @return {boolean}
 */
var isValidBST = function (root) {
	if (root == null) return null
	let result = true
	let num = -Infinity
	const dsp = node => {
		if (node == null) return
		dsp(node.left)
		result = result && num < node.val
		num = node.val
		dsp(node.right)
	}
	dsp(root)
	return result
}

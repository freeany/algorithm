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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	if (root == null) return []

	const result = []
	const dsp = root => {
		if (root == null) return

		dsp(root.left)
		result.push(root.val)
		dsp(root.right)
	}
	dsp(root)
	return result
}

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
var postorderTraversal = function (root) {
	if (root == null) return []

	const result = []
	const dsp = root => {
		if (root == null) return

		dsp(root.left)
		dsp(root.right)
		result.push(root.val)
	}
	dsp(root)
	return result
}

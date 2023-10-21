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
 * error!!!
 */
var findBottomLeftValue = function (root) {
	let maxDepth = -Infinity
	let result = null
	let depth = 0
	const dsp = root => {
		if (root.left == null && root.right == null) {
			if (depth > maxDepth) {
				result = root.val
			}
		}

		if (root.left) {
			depth++
			dsp(root.left)
			depth--
		}
		if (root.right) {
			depth++
			dsp(root.right)
			depth--
		}
	}

	dsp(root)

	return result
}

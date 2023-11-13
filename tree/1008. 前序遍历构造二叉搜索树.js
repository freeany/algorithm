/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
	if (preorder == null || preorder.length == 0) return null

	const value = preorder.shift()
	const root = new TreeNode(value)
	root.left = bstFromPreorder(preorder.filter(item => item < value))
	root.right = bstFromPreorder(preorder.filter(item => item > value))
	return root
}

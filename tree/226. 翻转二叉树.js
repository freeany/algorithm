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
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (root === null) return root
	const temp = invertTree(root.left)
	root.left = invertTree(root.right)
	root.right = temp
	return root
}

// 自顶向下
var invertTree = function (root) {
	if (root === null) return root
	const temp = root.left
	root.left = root.right
	root.right = temp

	invertTree(root.left)
	invertTree(root.right)
	return root
}

// 自底向上
var invertTree = function (root) {
	if (root === null) return root

	invertTree(root.left)
	invertTree(root.right)

	const temp = root.left
	root.left = root.right
	root.right = temp
	return root
}

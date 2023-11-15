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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
	if (root == null) return null
	const result = []

	function dfs(node) {
		if (node == null) return
		dfs(node.left)
		result.push(node)
		dfs(node.right)
	}
	dfs(root)

	let first = null
	let second = null
	for (let i = 0; i < result.length - 1; i++) {
		const cur = result[i]
		const next = result[i + 1]
		if (cur.val > next.val) {
			if (!first) {
				first = cur
			}
			second = next
		}
	}
	const temp = first.val
	first.val = second.val
	second.val = temp
	return root
}

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
var flatten = function (root) {
	if (root == null) return null

	let arr = []
	function treeToArr(node) {
		if (node == null) return null
		arr.push(node)
		treeToArr(node.left)
		treeToArr(node.right)
	}
	treeToArr(root)

	const head = arr[0]
	for (let i = 1; i < arr.length; i++) {
		const prev = arr[i - 1]
		const curr = arr[i]
		prev.left = null
		prev.right = curr
	}
	return head
}

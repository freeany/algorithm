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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (root == null) return []
	const queue = [root]

	const result = []
	while (queue.length) {
		const size = queue.length
		const arr = []
		for (let i = 0; i < size; i++) {
			const node = queue.shift()
			arr.push(node.val)
			if (node.left) {
				queue.push(node.left)
			}
			if (node.right) {
				queue.push(node.right)
			}
		}
		result.push(arr)
	}
	return result
}

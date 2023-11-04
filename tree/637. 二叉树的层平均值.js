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
var averageOfLevels = function (root) {
	const result = []
	if (root == null) return result

	const queue = [root]
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
		const average =
			arr.reduce((pre, cur) => {
				return (pre += cur)
			}, 0) / arr.length
		result.push(average)
	}
	return result
}

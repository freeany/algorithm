/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (root == null) return []

	const queue = [root]
	let result = []

	while (queue.length) {
		const size = queue.length
		let arr = []
		for (let i = 0; i < size; i++) {
			const node = queue.shift()
			arr.push(node.val)
			for (const child of node.children) {
				queue.push(child)
			}
		}
		result.push(arr)
	}
	return result
}

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
 */
var countNodes = function (root) {
	let n = 0

	const dsp = root => {
		if (root == null) return 0
		n++
		dsp(root.left)
		dsp(root.right)
	}

	dsp(root)
	return n
}

// 层叠遍历也很简单
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
	if (root == null) return 0

	const queue = [root]

	let n = 0
	while (queue.length) {
		const size = queue.length
		for (let i = 0; i < size; i++) {
			const node = queue.shift()
			n++
			if (node.left) {
				queue.push(node.left)
			}
			if (node.right) {
				queue.push(node.right)
			}
		}
	}
	return n
}

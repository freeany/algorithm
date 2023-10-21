/**
 * @param {TreeNode} root
 * @return {number}
 * 思路： 层序遍历， 获取到每一层的数据，然后获取最后一层的数据
 *  然后获取最后一层最左边的数据
 *
 * 递归版 值得探究
 */
var findBottomLeftValue = function (root) {
	if (root == null) return root

	const queue = [root]
	const result = []

	while (queue.length) {
		const size = queue.length

		let arr = []
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

	return result[result.length - 1][0]
}

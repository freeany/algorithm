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
var maxPathSum = function (root) {
	let sum = -Infinity

	function dfs(node) {
		if (node == null) return 0
		const left = dfs(node.left) // 左子树提供的最大路径和
		const right = dfs(node.right) // 右子树提供的最大路径和

		sum = Math.max(left + right + node.val, sum) // 当前子树内部的最大路径和与sum相比
		const outMaxSum = node.val + Math.max(left, right, 0) // 把最大的拿出来继续向上暴露
		return outMaxSum < 0 ? 0 : outMaxSum
	}
	dfs(root)
	return sum
}

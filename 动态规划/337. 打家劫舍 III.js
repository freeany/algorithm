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
var rob = function (root) {
	const dfs = root => {
		if (root == null) return [0, 0]
		const left = dfs(root.left)
		const right = dfs(root.right)
		const notTou = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
		const tou = root.val + left[0] + right[0]
		return [notTou, tou]
	}
	const result = dfs(root)

	return Math.max(...result)
}

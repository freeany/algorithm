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
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 注意： 是到最近叶子结点，也就是说必须要有叶子结点
 */
var minDepth = function (root) {
	if (root == null) return 0
	// 如果既没有左，又没有右，那返回1
	if (root.left == null && root.right == null) return 1
	// 如果没有left，但是有right，递归右子树
	if (root.left == null && root.right) {
		return 1 + minDepth(root.right)
	}
	// 如果有left，但是没有right，递归左子树
	if (root.left && root.right == null) {
		return 1 + minDepth(root.left)
	}
	// 如果都有
	let minLeft = minDepth(root.left)
	let minRight = minDepth(root.right)
	return Math.min(minLeft, minRight) + 1
}

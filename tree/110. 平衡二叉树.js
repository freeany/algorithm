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
 * @return {boolean}
 *
 * 判断平衡二叉树
 * 就是求每个节点所对应子树的高度，求高度就是用后序遍历。
 *  左右中， 从下到上求高度，一层层返回。
 * 要返回-1。因为求高度，所以要返回-1。
 */
var isBalanced = function (root) {
	if (root == null) return true

	const getHeight = node => {
		if (node == null) return 0

		// 递归左子树
		const leftHeight = getHeight(node.left)
		// 如果返回-1,那么就不用考虑了，直接就向上返回-1，表示左边已经不是平衡二叉树了
		if (leftHeight == -1) return -1
		// 同理 上
		const rightHeight = getHeight(node.right)
		if (rightHeight == -1) return -1

		if (Math.abs(leftHeight - rightHeight) > 1) {
			return -1
		}
		// 返回父结点的高度 (左右子树的最大值+父结点本身)
		return Math.max(leftHeight, rightHeight) + 1
	}
	return getHeight(root) != -1
}

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
	if (root == null) return false
	const isSameTree = (root1, root2) => {
		if (root1 === root2) return true
		if (root1 == null && root2 != null) return false
		if (root1 != null && root2 == null) return false
		if (root1.val !== root2.val) return false

		return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
	}

	if (isSameTree(root, subRoot)) {
		return true
	}

	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

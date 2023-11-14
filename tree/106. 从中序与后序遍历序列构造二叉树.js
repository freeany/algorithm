/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 */
var buildTree = function (inorder, postorder) {
	if (inorder.length == 0) return null

	const root = new TreeNode(postorder[postorder.length - 1])
	const index = inorder.indexOf(root.val)
	root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
	root.right = buildTree(inorder.slice(index + 1), postorder.slice(index, -1))
	return root
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
 */
var constructFromPrePost = function (preorder, postorder) {
	if (preorder.length == 0) return null
	const root = new TreeNode(preorder[0])
	const index = postorder.indexOf(preorder[1])
	root.left = constructFromPrePost(preorder.slice(1, index + 2), postorder.slice(0, index + 1))
	root.right = constructFromPrePost(preorder.slice(index + 2), postorder.slice(index + 1, -1))
	return root
}

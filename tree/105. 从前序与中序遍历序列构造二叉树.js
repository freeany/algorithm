const preorder = ['a', 'c', 'f', 'g', 'b', 'd', 'e']
const inorder = ['f', 'c', 'g', 'a', 'd', 'b', 'e']

/**
 * 前序遍历 第一个就是根节点
 * 中序遍历，中间那个是根节点
 */
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}
var buildTree = function (preorder, inorder) {
	if (preorder == null || inorder == null || preorder.length == 0 || inorder.length == 0 || preorder.length !== inorder.length) {
		return null
	}
	const root = new TreeNode(preorder[0]) // 找到根节点
	const index = inorder.indexOf(root) // 找到根节点在中序遍历中的位置
	let qianLeft = preorder.slice(1, index + 1) // 前序遍历的左子树
	let qianRight = preorder.slice(index + 1) // 前序遍历的右子树
	let zhongLeft = inorder.slice(0, index) // 中序遍历的左子树
	let zhongRight = inorder.slice(index + 1) // 中序遍历的右子树
	root.left = buildTree(qianLeft, zhongLeft) // 根据左子树的前序和中序还原左子树并赋值给root.left
	root.right = buildTree(qianRight, zhongRight) // 根据右子树的前序和中序还原右子树并赋值给root.right
	return root
}

console.log(buildTree(preorder, inorder))

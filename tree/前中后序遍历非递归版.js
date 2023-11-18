// 前序遍历
var preorderTraversal = function (root) {
	if (root == null) return []

	const stack = [root]
	let arr = []
	while (stack.length) {
		let node = stack.pop()
		arr.push(node.val)
		if (node.right) stack.push(node.right)
		if (node.left) stack.push(node.left)
	}
	return arr
}

// 中序遍历
var inorderTraversal = function (root) {
	if (root == null) return []
	const stack = []
	const arr = []
	let p = root
	while (p || stack.length) {
		while (p) {
			stack.push(p)
			p = p.left
		}
		let node = stack.pop()
		arr.push(node.val)
		if (node.right) p = node.right
	}
	return arr
}
// 后序遍历
var postorderTraversal = function (root) {
	if (root == null) return []

	const stack = [root]
	const outStack = []

	while (stack.length) {
		const node = stack.pop()
		outStack.unshift(node.val)
		if (node.left) stack.push(node.left)
		if (node.right) stack.push(node.right)
	}

	return outStack
}

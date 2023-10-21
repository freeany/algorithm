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
 * @return {string[]}
 *
 * 充分的体现了递归与回溯
 */
var binaryTreePaths = function (root) {
	let result = []
	if (root == null) return []
	let tempList = []

	const dsp = root => {
		tempList.push(root.val)
		// 而且加了判断这个就能保证root一定是有值的。
		if (root.left == null && root.right == null) {
			result.push(tempList.join('->'))
			return
		}

		// 需要判断，不然就不知道在哪里回溯，因为只有一次递归才要一次回溯。
		// 而且加了判断
		if (root.left) {
			dsp(root.left)
			tempList.pop()
		}
		if (root.right) {
			dsp(root.right)
			tempList.pop()
		}
	}
	dsp(root)
	return result
}

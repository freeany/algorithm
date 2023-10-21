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
 * @param {number} targetSum
 * @return {number[][]}
 *
 * 路径的题 还是递归+回溯，前序遍历
 * 这道题是路径总和+二叉树的所有路径的结合版。
 */
var pathSum = function (root, targetSum) {
	const result = []
	if (root == null) return []
	const tempList = []
	let sum = 0

	const traversal = node => {
		sum += node.val
		tempList.push(node.val)
		console.log(tempList, 'xxx', sum)
		if (node.left == null && node.right == null && sum === targetSum) {
			result.push([...tempList])
			return
		}
		if (node.left) {
			traversal(node.left)
			sum -= node.left.val
			tempList.pop()
		}
		if (node.right) {
			traversal(node.right)
			sum -= node.right.val
			tempList.pop()
		}
	}

	traversal(root)
	return result
}

class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

const a1 = new Node(5)
const a2 = new Node(4)
const a3 = new Node(8)
const a4 = new Node(11)
const a5 = new Node(13)
const a6 = new Node(4)
const a7 = new Node(7)
const a8 = new Node(2)
const a9 = new Node(5)
const a10 = new Node(1)

a1.left = a2
a1.right = a3
a2.left = a4
a4.left = a7
a4.right = a8

a3.left = a5
a3.right = a6
a6.left = a9
a6.right = a10

console.log(pathSum(a1, 22))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
	if (head == null) return null

	// 寻找中间节点
	let slow = head
	let fast = head
	let prev = null
	while (fast && fast.next) {
		prev = slow
		fast = fast.next.next
		slow = slow.next
	}

	const root = new TreeNode(slow.val)
	if (prev != null) {
		prev.next = null
		root.left = sortedListToBST(head)
	}
	root.right = sortedListToBST(slow.next)
	return root
}

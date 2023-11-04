/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	if (head == null) return null

	let fast = head
	let slow = head
	// 获取的是正数第n+1个节点
	while (n--) {
		fast = fast.next
	}
	if (!fast) {
		return head.next
	}
	// 因为fast是正数第n+1个节点, 而且要变slow的next，所以要写成fast.next
	while (fast.next) {
		fast = fast.next
		slow = slow.next
	}
	slow.next = slow.next.next

	return head
}

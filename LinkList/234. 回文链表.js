/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	if (head == null || head.next == null) return true
	const reveserLinkedList = node => {
		let prev = null
		let curr = node
		while (curr) {
			const nextTemp = curr.next
			curr.next = prev
			prev = curr
			curr = nextTemp
		}
		return prev
	}
	const getHalfNode = node => {
		let fast = node
		let slow = node

		while (fast && fast.next && fast.next.next) {
			fast = fast.next.next
			slow = slow.next
		}
		return slow
	}

	// 得到后半部分节点
	const halfNode = getHalfNode(head)
	// 将后半部分节点反转
	const reveserHalfLinkedList = reveserLinkedList(halfNode.next)

	halfNode.next = null
	let r = reveserHalfLinkedList
	let p = head
	let result = true
	while (r && result) {
		if (r.val !== p.val) result = false
		r = r.next
		p = p.next
	}
	halfNode.next = reveserLinkedList(reveserHalfLinkedList)
	return result
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let p1 = l1
	let p2 = l2
	let ele = {
		next: null
	}

	let p3 = ele
	let carry = 0 // 十位上的数
	while (p1 || p2) {
		let val1 = p1 ? p1.val : 0
		let val2 = p2 ? p2.val : 0
		const val = val1 + val2 + carry
		carry = Math.floor(val / 10)
		let num = val % 10
		p3.next = new ListNode(num)
		if (p1) p1 = p1.next
		if (p2) p2 = p2.next
		p3 = p3.next
	}
	if (carry) {
		p3.next = new ListNode(carry)
	}
	return ele.next
}

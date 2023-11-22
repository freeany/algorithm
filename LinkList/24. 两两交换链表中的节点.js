/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	let ele = {
		next: head
	}

	let p = ele
	while (p.next && p.next.next) {
		let curr = p.next.next
		let pre = p.next
		pre.next = curr.next
		curr.next = pre
		p.next = curr
		p = pre
	}
	return ele.next
}

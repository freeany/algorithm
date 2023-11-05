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
var deleteDuplicates = function (head) {
	let arr = []
	let p = head
	let ele = {
		next: null
	}
	let p2 = ele
	while (p) {
		if (!arr.includes(p.val)) {
			p2.next = new ListNode(p.val)
			p2 = p2.next
		}
		arr.push(p.val)
		p = p.next
	}
	return ele.next
}

var deleteDuplicates123 = function (head) {
	let ele = {
		next: head
	}
	let p = ele
	while (p.next) {
		if (p.val === p.next.val) {
			p.next = p.next.next
		} else {
			p = p.next
		}
	}
	return ele.next
}

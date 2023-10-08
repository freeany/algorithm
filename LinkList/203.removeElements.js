/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function (head, val) {
// 	if (head === null) return head
// 	head.next = removeElements(head.next, val)
// 	return head.val === val ? head.next : head
// }

// 哨兵
var removeElements = function (head, val) {
	if (head === null) return head
	let ele = {
		next: head
	}

	let p = ele
	while (p.next) {
		if (p.next.val === val) {
			p.next = p.next.next
		} else {
			p = p.next
		}
	}
	return ele.next
}

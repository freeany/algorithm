/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
// 多了一个 O(n)的内存。
// 	let cache = new Set()
// 	while (head) {
// 		if (cache.has(head)) {
// 			return true
// 		} else {
// 			cache.add(head)
// 		}
// 		head = head.next
// 	}
// 	return false
// }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	let slow = head
	let fast = head
	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next
		if (slow === fast) {
			return true
		}
	}
	return false
}

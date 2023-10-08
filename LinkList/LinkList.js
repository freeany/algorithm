class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class LinkedNodeList {
	constructor() {
		this.head = null
		this.currentNode = null
	}
	append(val) {
		let node = new Node(val)
		if (!this.head) {
			this.head = node
			this.currentNode = node
		} else {
			this.currentNode.next = node
			this.currentNode = node
		}
	}
}

const linked = new LinkedNodeList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(5)
console.log(linked)

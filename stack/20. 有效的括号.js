/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let lefts = ['(', '[', '{']
	let stack = []
	let map = {
		')': '(',
		']': '[',
		'}': '{'
	}

	for (let i = 0; i < s.length; i++) {
		if (lefts.includes(s[i])) {
			stack.push(s[i])
		} else {
			if (stack.pop() !== map[s[i]]) {
				return false
			}
		}
	}
	return stack.length === 0
}

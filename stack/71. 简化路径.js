/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
	path = path.split('/')

	const statck = []
	for (let i = 0; i < path.length; i++) {
		let ele = path[i]
		if (ele === '..') {
			statck.pop()
		} else if (ele && ele !== '.') {
			statck.push(ele)
		}
	}

	return '/' + statck.join('/')
}

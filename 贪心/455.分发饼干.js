/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	g = g.sort((a, b) => b - a)
	s = s.sort((a, b) => b - a)

	let result = 0
	let index = 0
	for (let i = 0; i < g.length; i++) {
		if (g[i] <= s[index]) {
			result++
			index++
		}
	}
	return result
}

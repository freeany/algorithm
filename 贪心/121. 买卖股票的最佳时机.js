/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let profix = 0
	let lowset = Infinity
	for (let i = 0; i < prices.length; i++) {
		// 获取左区间内最低的价格
		lowset = Math.min(lowset, prices[i])
		// 不断尝试改变profix的大小
		profix = Math.max(profix, prices[i] - lowset)
	}
	return profix
}

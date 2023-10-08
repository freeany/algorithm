/**
 *
 * 缓存淘汰策略：
 * 1. 队列，先进先出
 * 2. 淘汰最少使用次数，比如max是5
 *      {
 *        a: 1, b: 2, c: 3, d: 2, e: 6
 *      }
 *    此时新进来一个f, 那么f为1: 就淘汰a, 下次进来一个g。此时g为1， 淘汰f。
 * 这样计算的方式问题在于太耗时间了。
 * 3. lru last recent use 最近最少使用
 */

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.cache = new Map()
	this.max = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	if (this.cache.has(key)) {
		const temp = this.cache.get(key)
		this.cache.delete(key)
		this.cache.set(key, temp)
		return temp
	}
	return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	if (this.cache.has(key)) {
		this.cache.delete(key)
	} else if (this.cache.size >= this.max) {
		// 新增的要有缓存淘汰策略
		// this.cache.keys().next().value 获取最前面的那个数据
		this.cache.delete(this.cache.keys().next().value)
	}
	this.cache.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

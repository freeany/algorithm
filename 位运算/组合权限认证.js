/**
 * 举一个组合权限认证的例子
 *
 * 一个虚拟dom，有可能很多属性是动态的，每一个状态标记一个2进制位
 */

// 一个标签上有这些属性
let STYLE = 1
let CLASS = 1 << 1
let CHILDREN = 1 << 2

// 比如我们要标记STYLE和CLASS是静态的
// 授权
let StaticLabel = STYLE | CLASS

// 判断是否有这些权限 （只要 > 0 就代表有权限）
console.log(StaticLabel & STYLE, 'style')
console.log(StaticLabel & CLASS, 'class')
console.log(StaticLabel & CHILDREN, 'children')

// 删除权限
StaticLabel = StaticLabel ^ STYLE // 删除style权限

console.log('------------------------')
console.log(StaticLabel & STYLE, 'style')
console.log(StaticLabel & CLASS, 'class')
console.log(StaticLabel & CHILDREN, 'children')

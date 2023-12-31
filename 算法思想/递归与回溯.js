// 递推公式：
// 参数：结果，临时变量，输入
// 主体： 不停的搜索，把搜索的状态保存起来， 搜索出来结果，然后在回退。
//        刚开始要有终止条件。

/*
回溯的公式：
// 1. 如果需要全部答案的路径，首先在外面需要一个list
let list = []
function backtrack(list, 临时变量，输入) {
  结束条件：
    临时路径要新增一个路径。
  循环  {
    选择一个数据，
    递归backtrack(list, 临时变量，输入)
    撤回选择的数据
  }
}
backtrack



// 2. 不需要全部路径，只要返回true/false
*/

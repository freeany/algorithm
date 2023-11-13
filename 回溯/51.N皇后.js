/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
	let board = new Array(n)
	for (let i = 0; i < board.length; i++) {
		board[i] = new Array(n).fill('.')
	}
	let result = []

	function isVaild(row, col) {
		for (let i = 0; i < row; i++) {
			for (let j = 0; j < n; j++) {
				if (board[i][j] === 'Q' && (col === j || row + col === i + j || row - col === i - j)) {
					return false
				}
			}
		}
		return true
	}

	function backtrack(row) {
		if (row === n) {
			const stringBoard = board.slice()
			for (let i = 0; i < stringBoard.length; i++) {
				stringBoard[i] = stringBoard[i].join('')
			}
			result.push(stringBoard)
			return
		}
		for (let col = 0; col < n; col++) {
			if (isVaild(row, col)) {
				board[row][col] = 'Q'
				backtrack(row + 1)
				board[row][col] = '.'
			}
		}
	}
	backtrack(0)
	return result
}

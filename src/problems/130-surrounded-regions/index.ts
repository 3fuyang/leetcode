/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
	if (!board.length) {
		return;
	}

	const rows = board.length;
	const cols = board[0].length;

	// Mark all boundary-connected 'O's as safe using 'S'
	for (let i = 0; i < rows; i++) {
		if (board[i][0] === "O") markSafe(board, i, 0);
		if (board[i][cols - 1] === "O") markSafe(board, i, cols - 1);
	}
	for (let j = 0; j < cols; j++) {
		if (board[0][j] === "O") markSafe(board, 0, j);
		if (board[rows - 1][j] === "O") markSafe(board, rows - 1, j);
	}

	// Convert remaining 'O's to 'X' and restore 'S' back to 'O'
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (board[i][j] === "O") {
				board[i][j] = "X";
			} else if (board[i][j] === "S") {
				board[i][j] = "O";
			}
		}
	}
}

function markSafe(board: string[][], i: number, j: number): void {
	if (
		i < 0 ||
		i >= board.length ||
		j < 0 ||
		j >= board[0].length ||
		board[i][j] !== "O"
	) {
		return;
	}

	board[i][j] = "S";

	markSafe(board, i - 1, j);
	markSafe(board, i + 1, j);
	markSafe(board, i, j - 1);
	markSafe(board, i, j + 1);
}

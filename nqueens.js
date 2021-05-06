

function isSafe(board, row, col) {
    for (let i = 0; i < col; i++) {
        if (board[row][i] == 1) {
            return false
        }
    }

    // diagonal para esquerda para cima
    for (let i = row; i < -1; i--) {
        for (let j = col; j < -1; j--) {
            if (board[i][j] == 1) {
                return false
            }
        }
    }

    // diagonal para esquerda para baixo
    for (let i = row; i < this.N ; i++) {
        for (let j = col; j < -1; j--) {
            if (board[i][j] == 1) {
                return false
            }
        }
    }

    return true
}


function findSolution(board, col) {
    if (col >= this.N) {
        return true
    }

    for (let row = 0; row < this.N; row++) {
        
        if (isSafe(board, row, col)) {
            board[row][col] = 1

            if (findSolution(board, (col + 1)) == true) {
                return true
            }
            board[row][col] = 0
        }
    }
    return false
}

function solveNQuees(n = 7) {
    // global size
    const N = n
    let row = Array(n).fill(0)
    let board = Array(n).fill(row)

    if (findSolution(board, 0)) {
        console.log("Sem solução");
    }
    
    console.log("Com solução");
    console.log(board);
}

solveNQuees()
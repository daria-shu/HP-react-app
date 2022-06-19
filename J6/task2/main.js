// Шашка хрестики-нулики. Припустимо, що дошка має форму масиву 3x3, де значення дорівнює 0, якщо місце
// порожнє, 1, якщо це «X», або 2, якщо це «O»
// Ми хочемо, щоб наша функція повертала:
//     -1, якщо дошка ще не закінчена (є вільні місця і немає переможців),
//      1, якщо "X" виграв,
//      2 якщо «О» виграв,
//      0, якщо це котяча гра (тобто нічия, усі місця заповнені).
let winLines = [[2, 1, 1],
                [1, 2, 2],
                [2, 2, 1]]

console.log(check(winLines))

function check(board){

    for (let i = 0; i < board.length; i++) {
        if(board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]){
            if(board[i][0] === 1){
                return 1
            }else{
                return 2
            }
        }

        if(board[0][i] !== 0 && board[0][i] === board[1][i] && board[1][i] === board[2][i]){
            if(board[0][i] === 1){
                return 1
            }else{
                return 2
            }
        }
    }

    if(board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
        if(board[0][0] === 1){
            return 1
        }else{
            return 2
        }
    }

    if(board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]){
        if(board[0][0] === 1){
            return 1
        }else{
            return 2
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            return board[i][j] === 0 ? -1 : 0

        }
    }

}




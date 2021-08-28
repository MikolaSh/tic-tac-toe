const FIRST_PLAYER = 'x';
const SECOND_PLAYER = 'o';
const NEXT_PLAYER = {
    [FIRST_PLAYER]: SECOND_PLAYER,
    [SECOND_PLAYER]:FIRST_PLAYER,
}

class TicTacToe {
    constructor() {
    }

    currentPlayer = 'x';
    gameField = [
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ]

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameField[rowIndex][columnIndex]!=null){return;}
        this.gameField[rowIndex][columnIndex]=this.currentPlayer;
        this.currentPlayer = NEXT_PLAYER[this.currentPlayer];
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        for(var i=0;i<3;i++){
            if(this.gameField[i][0]==this.gameField[i][1] && this.gameField[i][0]==this.gameField[i][2] &&this.gameField[i][1]==this.gameField[i][2]){return this.gameField[i][0]}
            if(this.gameField[0][i]==this.gameField[1][i] && this.gameField[0][i]==this.gameField[2][i] &&this.gameField[1][i]==this.gameField[2][i]){return this.gameField[0][i]}
        }
        if(this.gameField[0][0]==this.gameField[1][1] && this.gameField[0][0]==this.gameField[2][2] && this.gameField[1][1] == this.gameField[2][2]){return this.gameField[0][0]}
        if(this.gameField[0][2]==this.gameField[1][1] && this.gameField[0][2]==this.gameField[2][0] && this.gameField[1][1] == this.gameField[2][0]){return this.gameField[0][2]}
        return null;
    }

    noMoreTurns() {
        return this.gameField.every(row => row.every(col=>col));
    }

    isDraw() {
        return this.noMoreTurns()&&!this.getWinner()
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex]?this.gameField[rowIndex][colIndex]:null;
    }
}

module.exports = TicTacToe;

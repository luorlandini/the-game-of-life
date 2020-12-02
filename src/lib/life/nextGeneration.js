import { LIVE, BOARD_SIZE, DEAD, MIN_LIVE, MAX_LIVE } from '../../constants'
import liveNeighbors from './liveNeighbors'
import createBoard from './createBoard'

const nextGeneration = board => {
    let newBoard = createBoard(BOARD_SIZE, DEAD);
    for (let x = 0; x < BOARD_SIZE; x++) {
        for (let y = 0; y < BOARD_SIZE; y++) {
            const live = liveNeighbors(board, x, y);
            const cell = board[x][y];
            newBoard[x][y] = (live === MAX_LIVE || (live === MIN_LIVE && cell === LIVE)) ? LIVE : DEAD;
        }
    }
    return newBoard;
}

export default nextGeneration;

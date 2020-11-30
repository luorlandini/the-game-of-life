import { LIVE } from '../../constants'
import getNeighbors from './getNeighbors'

const liveNeighbors = (board, x, y) => {
    let neighBord = getNeighbors(x, y).filter(n => board[n[0]][n[1]] === LIVE).length;
    return neighBord;
}

export default liveNeighbors

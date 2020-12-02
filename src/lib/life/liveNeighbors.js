import { LIVE } from '../../constants'
import getNeighbors from './getNeighbors'

const liveNeighbors = (board, x, y) => {
    let neighBors = getNeighbors(x, y)
        .filter(neighBor => board[neighBor[0]][neighBor[1]] === LIVE).length;
    return neighBors;
}

export default liveNeighbors

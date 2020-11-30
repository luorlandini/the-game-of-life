import { LIVE, BOARD_SIZE, DEAD, MIN_LIVE, MAX_LIVE } from '../../constants'
import liveNeighbors from './liveNeighbors'
import createBoard from './createBoard'

const nextGeneration = world => {
    let newWorld = createBoard(BOARD_SIZE, DEAD);
    for (let x = 0; x < BOARD_SIZE; x++) {
        for (let y = 0; y < BOARD_SIZE; y++) {
            const live = liveNeighbors(world, x, y);
            const cell = world[x][y];
            newWorld[x][y] = (live === MAX_LIVE || (live === MIN_LIVE && cell === LIVE)) ? LIVE : DEAD;
        }
    }
    return newWorld;
}

export default nextGeneration;

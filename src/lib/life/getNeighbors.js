import { BOARD_SIZE } from '../../constants'

const getNeighbors = (x, y) => {
    return [
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1]
    ]
        .filter(cell =>
            cell[0] >= 0 && cell[0] < BOARD_SIZE &&
            cell[1] >= 0 && cell[1] < BOARD_SIZE
        );
}

export default getNeighbors
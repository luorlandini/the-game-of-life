import { BOARD_SIZE } from '../../constants'

const getNeighbors = (x, y) => {

    return [[x - 1, y - 1], [x, y - 1], [x + 1, y - 1], [x - 1, y], [x + 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]]
        .filter(c =>
            c[0] >= 0 && c[0] < BOARD_SIZE &&
            c[1] >= 0 && c[1] < BOARD_SIZE
        );
}

export default getNeighbors
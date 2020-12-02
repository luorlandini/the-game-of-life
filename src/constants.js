export const BOARD_SIZE = 40;
export const PLAY_TIME = 1000;
export const LIVE = 1;
export const MAX_LIVE = 3;
export const MIN_LIVE = 2;
export const DEAD = 0;
export const GAME_RULES = [
    'Any live cell with fewer than two live neighbours dies, as if by underpopulation.',
    'Any live cell with two or three live neighbours lives on to the next generation.',
    'Any live cell with more than three live neighbours dies, as if by overpopulation.',
    'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'
]
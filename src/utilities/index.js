export const changeArrayValue = (arr, i, val) => [
    ...arr.slice(0, i), val, ...arr.slice(i + 1)
];

export const shuffle = world => world.map(row => row.map(cell => Math.round(Math.random())));

export const _2DArray = (size, value) => {
    return Array(size).fill().map(() => Array(size).fill(value));
}

export const randomize = array => array.map(row => row.map(cell => Math.round(Math.random())));
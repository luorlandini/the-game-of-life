import React from 'react';
import { changeArrayValue } from '../../utilities';
import './Grid.css'

const Grid = ({ data }) => {

    console.log('data');
    console.log(data);

    const toggleCell = (cell, x, y) => {
        const { world } = this.props;
        const row = changeArrayValue(world[y], x, cell ? 0 : 1);
        const newWorld = changeArrayValue(world, y, row);
        this.props.onChange(newWorld);
    }

    const renderCell = (cell, x, y) => {
        return (
            <div key={x}
                className='cell'
                onMouseDown={() => toggleCell(cell, x, y)}
                style={{ backgroundColor: cell ? '#424151' : null }}
            />
        );
    }

    const renderRow = (row, y) => (
        <div className='row' key={y}>
            {row.map((cell, x) => renderCell(cell, x, y))}
        </div>
    )

    return (
        <div className='grid'>
            { data.map((row, y) => renderRow(row, y))}
        </div>
    )

}

export default Grid
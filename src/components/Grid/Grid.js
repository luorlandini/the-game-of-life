
import React, { useState, useEffect } from 'react';
import { changeArrayValue } from '../../utilities';
import './Grid.css'

const Grid = ({ data, changeDataGrid }) => {

    const [community, setCommunity] = useState(data)

    useEffect(() => {
        setCommunity(data);
    }, [data]);

    const clickOnCell = (cell, x, y) => {
        const row = changeArrayValue(community[y], x, cell ? 0 : 1);
        const newComm = changeArrayValue(community, y, row);
        setCommunity(newComm);
        changeDataGrid(newComm);
    }

    const renderCell = (cell, x, y) => {
        return (
            <div key={x}
                className='cell'
                onClick={() => clickOnCell(cell, x, y)}
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
            { community.map((row, y) => renderRow(row, y))}
        </div>
    )

}

export default Grid
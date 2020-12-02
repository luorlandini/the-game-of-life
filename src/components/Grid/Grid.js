
import React, { useState, useEffect } from 'react';
import { changeArrayValue } from '../../utilities';
import PropTypes from 'prop-types'
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
                style={{ backgroundColor: cell ? '#172b4d' : null }}
            />
        );
    }

    const renderRow = (row, y) => (
        <div className='row' key={y}>
            {row.map((cell, x) => renderCell(cell, x, y))}
        </div>
    )

    return (
        <div class="d-flex flex-row bd-highlight grid">
            { community.map((row, y) => renderRow(row, y))}
        </div>
    )

}
Grid.propTypes = {

    data: PropTypes.array.isRequired,
    changeDataGrid: PropTypes.func,

}

/*
TolltipInfo.defaultProps = {
    placement: 'top',
}
*/

export default Grid
import React from 'react';
import { Button } from 'react-bootstrap';
import TolltipInfo from '../TooltipInfo';
import { FaPlay, FaStop, FaForward, FaRandom, FaTrashAlt, FaReadme } from 'react-icons/fa';

import './Controls.css'

const Controlls = ({ run, nextGeneretion, stop, random, clear, play }) => {

    let startStop = (!play) ? <Button onClick={run}>Play <FaPlay /></Button> : <Button variant="danger" onClick={stop} >Stop <FaStop /></Button>

    let descToolTip = [
        'Any live cell with fewer than two live neighbours dies, as if by underpopulation.',
        'Any live cell with two or three live neighbours lives on to the next generation.',
        'Any live cell with more than three live neighbours dies, as if by overpopulation.',
        'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'
    ]


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom controls">
            <div className="container">
                <div id="navbarResponsive">
                    {startStop}
                    <Button onClick={nextGeneretion} >Next <FaForward /></Button>
                    <Button onClick={random} >Random <FaRandom /></Button>
                    <Button onClick={clear} >Clear <FaTrashAlt /></Button>
                    <TolltipInfo infoList={descToolTip} >
                        <Button>Game rules <FaReadme /></Button>
                    </TolltipInfo>
                </div>
            </div>
        </nav>


    )
}

export default Controlls
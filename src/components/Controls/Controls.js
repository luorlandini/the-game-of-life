import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaPlay, FaStop, FaForward, FaRandom, FaTrashAlt, FaReadme } from 'react-icons/fa';

import './Controls.css'

const Controlls = ({ run, nextGeneretion, stop, random, clear, play }) => {

    let startStop = (!play) ? <Button onClick={run}>Play <FaPlay /></Button> : <Button variant="danger" onClick={stop} >Stop <FaStop /></Button>

    let descToolTip = (<Tooltip>
        <p>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</p>
        <p>Any live cell with two or three live neighbours lives on to the next generation.</p>
        <p>Any live cell with more than three live neighbours dies, as if by overpopulation.</p>
        <p>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>

    </Tooltip>)


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom controls">
            <div className="container">
                <div id="navbarResponsive">
                    {startStop}
                    <Button onClick={nextGeneretion} >Next <FaForward /></Button>
                    <Button onClick={random} >Random <FaRandom /></Button>
                    <Button onClick={clear} >Clear <FaTrashAlt /></Button>
                    <OverlayTrigger placement="top" overlay={descToolTip}>
                        <Button>Game rules <FaReadme /></Button>
                    </OverlayTrigger>
                </div>
            </div>
        </nav>


    )
}

export default Controlls
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaPlay, FaStop, FaForward, FaRandom, FaTrashAlt } from 'react-icons/fa';
import './Controls.css'

const Controlls = ({ run, nextGeneretion, stop, random, play }) => {

    let startStop = (!play) ? <Button onClick={run}>Play <FaPlay /></Button> : <Button variant="danger" onClick={stop} >Stop <FaStop /></Button>

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom controls">
            <div className="container">
                <div id="navbarResponsive">
                    {startStop}
                    <Button onClick={nextGeneretion} >Next <FaForward /></Button>
                    <Button onClick={random} >Random <FaRandom /></Button>
                    <Button onClick={random} >Clear <FaTrashAlt /></Button>
                </div>
            </div>
        </nav>


    )
}

export default Controlls
import React from 'react';
import { Button } from 'react-bootstrap';
import TolltipInfo from '../TooltipInfo';
import { GAME_RULES } from '../../constants'
import { FaPlay, FaStop, FaForward, FaRandom, FaTrashAlt, FaReadme } from 'react-icons/fa';
import PropTypes from 'prop-types'

import './Controls.css'

const Controlls = ({ run, nextGeneretion, stop, random, clear, play }) => {

    let startStop = (!play) ? <Button onClick={run}>Play <FaPlay /></Button> : <Button variant="danger" onClick={stop} >Stop <FaStop /></Button>

    let descToolTip = GAME_RULES;


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

Controlls.propTypes = {

    run: PropTypes.func.isRequired,
    nextGeneretion: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    random: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    play: PropTypes.func.isRequired

}



export default Controlls
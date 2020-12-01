import React from 'react';
import { Button } from 'react-bootstrap';


const Controlls = ({ run, nextGeneretion, stop, random, play }) => {

    console.log('play');
    console.log(play);

    let startStop = (!play) ? <Button variant="success" onClick={run}>Play</Button> : <Button variant="danger" onClick={stop} >Stop</Button>

    return (
        <div>
            { startStop}
            <Button variant="primary" onClick={nextGeneretion} >Next</Button>
            <Button variant="primary" onClick={random} >Random</Button>
        </div>

    )
}

export default Controlls
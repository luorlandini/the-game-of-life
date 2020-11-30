import React, { useState, useEffect, useCallback, useRef } from 'react';
import Grid from '../Grid';
import { Button } from 'react-bootstrap';
import { nextGeneration, createBoard } from '../../lib/life';
import { BOARD_SIZE, DEAD, PLAY_TIME } from '../../constants'

class Board extends React.Component {

    state = {
        community: createBoard(BOARD_SIZE, DEAD),
        generation: 0,
        playing: false,
    }

    changeState = (community, generation) => this.setState({
        community: community,
        generation: generation,
    });

    onChangeGrid = (comm) => { this.changeState(comm, this.state.generation + 1) }
    nextGeneretion = () => {
        this.onChangeGrid(nextGeneration(this.state.community));
    }
    run = () => {
        let intervalId = setInterval(() => this.nextGeneretion(), PLAY_TIME);
    }
    render() {
        const { community, playing } = this.state;
        return (
            <div>
                <Grid data={community} changeDataGrid={this.onChangeGrid} />
                <Button variant="primary" onClick={this.run}>Play</Button>
                <Button variant="primary" onClick={this.nextGeneretion} >Next</Button>
            </div >
        )
    }


}

export default Board
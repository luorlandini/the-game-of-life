import React from 'react';
import Grid from '../Grid';
import { Button } from 'react-bootstrap';
import { nextGeneration, createBoard } from '../../lib/life';
import { BOARD_SIZE, DEAD, PLAY_TIME } from '../../constants'
import { randomize } from '../../utilities'

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            community: createBoard(BOARD_SIZE, DEAD),
            generation: 0,
            playing: false,
        }
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
        this.intervalId = setInterval(() => this.nextGeneretion(), PLAY_TIME);
    }

    stop = () => {
        this.setState({ playing: false });
        clearInterval(this.intervalId);
    }

    random = () => {
        this.changeState(randomize(this.state.community), 0);
    }

    render() {
        const { community, playing } = this.state;
        return (
            <div>
                <Grid data={community} changeDataGrid={this.onChangeGrid} />
                <Button variant="primary" onClick={this.run}>Play</Button>
                <Button variant="primary" onClick={this.nextGeneretion} >Next</Button>
                <Button variant="primary" onClick={this.stop} >Stop</Button>
                <Button variant="primary" onClick={this.random} >Random</Button>
            </div>
        )
    }


}

export default Board
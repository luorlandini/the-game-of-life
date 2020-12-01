import React from 'react';
import Grid from '../Grid';
import Controls from '../Controls'
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
        this.setState({ playing: true });
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
                <Controls
                    play={playing}
                    run={this.run}
                    nextGeneretion={this.nextGeneretion}
                    stop={this.stop}
                    random={this.random}
                />

            </div>
        )
    }


}

export default Board
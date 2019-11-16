import React, { Component } from 'react';

import Grid from '../Grid/Grid';

class Game extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isCirclePlayer: false,
            gridSize: 3, 
            isFinished: false};
    }
    
    render() {
        return (
            <div>
                <Grid isCircle={this.state.isCirclePlayer}/>

            </div>
        )
    }
}

export default Game;
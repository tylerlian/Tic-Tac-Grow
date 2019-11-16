import React, { Component } from 'react';

import Box from '../Box/Box';

class Grid extends Component {
    
    drawShape = () => {
        console.log("hello im dumb")
        console.log(this.props.isCircle);
    }

    render() {
        return (
            <div>
                <Box onClick={this.drawShape}/>
            </div>
        )
    }
}

export default Grid;
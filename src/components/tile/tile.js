import React, { Component } from 'react';
import { Row, Col } from "react-flexbox-grid";
import './tile.scss';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.getColor = this.getColor.bind(this);
    }
    getColor(){
        if (this.props.value ==="x"){
            return 'xBlue';
        }
        if (this.props.value === "o"){
            return 'oRed';
        }
    }

    render() {
        return (
            <div className={`tile drop-shadow ${this.getColor()}`}>
                {this.props.value}
            </div>

        );
    }
}

export default Tile;
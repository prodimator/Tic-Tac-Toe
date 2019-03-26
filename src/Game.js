import React, { Component } from 'react';
import { Row, Col } from "react-flexbox-grid";

import './Game.scss';
import Header from './components/header/header';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playerTurn: 'Player 1',
        playerOne:{
          name: '',
          score:'',
        },
        playerTwo: {
          name: '',
          score: '',
        },
        board: {
          row1: ['','',''],
          row2: ['','',''],
          row3: ['','','']
        }
    };
}
  render() {
    return (
      <div className="Game">
        <Header name={this.state.playerTurn} />
      </div>
    );
  }
}

export default Game;

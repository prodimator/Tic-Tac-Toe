import React, { Component } from 'react';
import { Row, Col } from "react-flexbox-grid";
import './Game.scss';
import Header from './components/header/header';
import Tile from './components/tile/tile';
import Score from './components/score/score';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: 'Player 1',
      playerOne: {
        name: '',
        score: '',
      },
      playerTwo: {
        name: '',
        score: '',
      },
      board: {
        row1: ['x', 'x', 'x'],
        row2: ['o', 'o', 'o'],
        row3: ['o', 'x', 'o']
      }
    };
  }
  render() {
    return (
      <>
        <div className="Game">
          <Header name={this.state.playerTurn} />
        </div>
        <Row center="md">
          <Col md={6} sm={6} xs={6}>
            <table className="game-board">
              <tbody>
                <tr id="row0">
                  <td id="cell0-0"><Tile value={this.state.board.row1[0]} /></td>
                  <td id="cell0-1"><Tile value={this.state.board.row1[1]} /></td>
                  <td id="cell0-2"><Tile value={this.state.board.row1[2]} /></td>
                </tr>
                <tr id="row1">
                  <td id="cell1-0"><Tile value={this.state.board.row2[0]} /></td>
                  <td id="cell1-1"><Tile value={this.state.board.row2[1]} /></td>
                  <td id="cell1-2"><Tile value={this.state.board.row2[2]} /></td>
                </tr>
                <tr id="row2">
                  <td id="cell2-0"><Tile value={this.state.board.row3[0]} /></td>
                  <td id="cell2-1"><Tile value={this.state.board.row3[1]} /></td>
                  <td id="cell2-2"><Tile value={this.state.board.row3[2]} /></td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row center="md">
          <Col md={6} sm={6} xs={6}>
            <Score />
          </Col>
        </Row>

      </>
    );
  }
}

export default Game;

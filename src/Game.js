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
      playerTurn: {
        name: "Player 1",
        value: 'x'
      },
      playerOne: {
        name: '',
        score: '',
      },
      playerTwo: {
        name: '',
        score: '',
      },
      board: {
        row1: ['', '', ''],
        row2: ['', '', ''],
        row3: ['', '', '']
      }
    };
    this.clickTile = this.clickTile.bind(this);
  }

  clickTile(event) {
    let index = event.currentTarget.id
    if (this.state.board.row1[index] === ''){
      let temp = this.state.board;
      temp.row1[index] = this.state.playerTurn.value; 
      this.setState({
        board : temp
      })
    }
  }

  swapPlayer(){
    if (this.state.playerTurn.name === "Player1"){
      this.setState({
        playerTurn: {
          name: "Player 2",
          value: "o"
        }
      })
    }
    if (this.state.playerTurn.name === "Player2"){
      this.setState({
        playerTurn: {
          name: "Player 1",
          value: "x"
        }
      })
    }
  }

  render() {
    return (
      <>
        <div className="Game">
          <Header name={this.state.playerTurn.name} />
        </div>
        <Row center="md">
          <Col md={6} sm={6} xs={6}>
            <table className="game-board">
              <tbody>
                <tr id="row0">
                  <td id="0" onClick={this.clickTile}><Tile value={this.state.board.row1[0]} /></td>
                  <td id="1" onClick={this.clickTile}><Tile value={this.state.board.row1[1]} /></td>
                  <td id="2" onClick={this.clickTile}><Tile value={this.state.board.row1[2]} /></td>
                </tr>
                <tr id="row1">
                  <td id="0" onClick={this.clickTile}><Tile value={this.state.board.row2[0]} /></td>
                  <td id="1" onClick={this.clickTile}><Tile value={this.state.board.row2[1]} /></td>
                  <td id="2" onClick={this.clickTile}><Tile value={this.state.board.row2[2]} /></td>
                </tr>
                <tr id="row2">
                  <td id="0" onClick={this.clickTile}><Tile value={this.state.board.row3[0]} /></td>
                  <td id="1" onClick={this.clickTile}><Tile value={this.state.board.row3[1]} /></td>
                  <td id="2" onClick={this.clickTile}><Tile value={this.state.board.row3[2]} /></td>
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

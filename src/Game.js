import React, { Component } from 'react';
import { Row, Col } from "react-flexbox-grid";
import './Game.scss';
import Header from './components/header/header';
import Tile from './components/tile/tile';
import Score from './components/score/score';

//for initial state and resetting game 
const initialState = {
  playerTurn: {
    name: "Player 1",
    value: 'x'
  },
  winner: "",
  tie: false,
  playerOne: {
    name: 'Player 1',
    score: 0,
  },
  playerTwo: {
    name: 'Player 2',
    score: 0,
  },
  board: [['', '', ''], ['', '', ''], ['', '', '']],
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.clickTile = this.clickTile.bind(this);
    this.reset = this.reset.bind(this);
    this.nextRound = this.nextRound.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
  }

  clickTile(row, cell) {
    if (this.state.winner === "") {   //if there is no winner, allow to click and set tile
      if (this.state.board[row][cell] === '') {
        let temp = this.state.board;
        temp[row][cell] = this.state.playerTurn.value;
        this.setState({
          board: temp
        })
        if (this.checkForWin() === false) {
          this.swapPlayer();
        }
      }
    }
  }

  swapPlayer() {
    if (this.state.playerTurn.name === "Player 1") {
      this.setState({
        playerTurn: {
          name: "Player 2",
          value: "o"
        }
      })
    }
    if (this.state.playerTurn.name === "Player 2") {
      this.setState({
        playerTurn: {
          name: "Player 1",
          value: "x"
        }
      })
    }
  }

  checkForWin() {
    let value = this.state.playerTurn.value;
    for (var i = 0; i < this.state.board.length; i++) {   //check horizontal
      if (this.state.board[i][0] === value && this.state.board[i][1] === value && this.state.board[i][2] === value) {
        this.setWinner();
        return true;
      }
    }
    for (var j = 0; j < this.state.board[0].length; j++) {    //check verical
      if (this.state.board[0][j] === value && this.state.board[1][j] === value && this.state.board[2][j] === value) {
        this.setWinner();
        return true;
      }
    }
    // check diagonals
    if (this.state.board[0][0] === value && this.state.board[1][1] === value && this.state.board[2][2] === value) {
      this.setWinner();
      return true;
    }
    if (this.state.board[2][0] === value && this.state.board[1][1] === value && this.state.board[0][2] === value) {
      this.setWinner();
      return true;
    }
    if (!this.state.board[0].includes('') && !this.state.board[1].includes('') && !this.state.board[2].includes('')) {   //if there is no winner and board is full
      this.setState({
        tie: true
      });
    }
    return false;
  }

  setWinner() {
    this.setState({
      winner: this.state.playerTurn.name
    });
    if (this.state.playerTurn.name === this.state.playerOne.name) {
      this.setState({
        playerOne: {
          name: this.state.playerOne.name,
          score: this.state.playerOne.score + 1
        }
      });
    }
    if (this.state.playerTurn.name === this.state.playerTwo.name) {
      this.setState({
        playerTwo: {
          name: this.state.playerTwo.name,
          score: this.state.playerTwo.score + 1
        }
      });
    }
  }

  reset() {
    this.setState(initialState);
    this.setState({
      board: [['', '', ''], ['', '', ''], ['', '', '']]
    })
  }
  nextRound() {
    this.setState({
      playerTurn: {
        name: "Player 1",
        value: 'x'
      },
      winner: "",
      tie: false,
      board: [['', '', ''], ['', '', ''], ['', '', '']]
    })
  }
  clearBoard() {
    this.setState({
      playerTurn: {
        name: "Player 1",
        value: 'x'
      },
      board: [['', '', ''], ['', '', ''], ['', '', '']]
    })
  }


  render() {
    return (
      <>
        <div className="Game">
          <Header name={this.state.playerTurn.name} winner={this.state.winner} tie={this.state.tie} reset={this.reset} nextRound={this.nextRound} clearBoard={this.clearBoard} />
        </div>
        <Row center="md">
          <Col md={6} sm={6} xs={6}>
            <table className="game-board">
              <tbody>
                <tr id="row0">
                  <td id="0" onClick={() => this.clickTile("0", "0")}><Tile value={this.state.board[0][0]} /></td>
                  <td id="1" onClick={() => this.clickTile("0", "1")}><Tile value={this.state.board[0][1]} /></td>
                  <td id="2" onClick={() => this.clickTile("0", "2")}><Tile value={this.state.board[0][2]} /></td>
                </tr>
                <tr id="row1">
                  <td id="0" onClick={() => this.clickTile("1", "0")}><Tile value={this.state.board[1][0]} /></td>
                  <td id="1" onClick={() => this.clickTile("1", "1")}><Tile value={this.state.board[1][1]} /></td>
                  <td id="2" onClick={() => this.clickTile("1", "2")}><Tile value={this.state.board[1][2]} /></td>
                </tr>
                <tr id="row2">
                  <td id="0" onClick={() => this.clickTile("2", "0")}><Tile value={this.state.board[2][0]} /></td>
                  <td id="1" onClick={() => this.clickTile("2", "1")}><Tile value={this.state.board[2][1]} /></td>
                  <td id="2" onClick={() => this.clickTile("2", "2")}><Tile value={this.state.board[2][2]} /></td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row center="md">
          <Col md={6} sm={6} xs={6}>
            <Score player1={this.state.playerOne} player2={this.state.playerTwo} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Game;

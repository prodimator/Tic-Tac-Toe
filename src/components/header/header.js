import React, { Component } from 'react';
import { Row, Col } from "react-flexbox-grid";
import './header.scss';

class Header extends Component {
    render() {
        let display, classColor = "";
        if (this.props.winner !== "" && !this.props.tie) {
            if (this.props.winner === "Player 1") {
                classColor = "xBlue";
            }
            if (this.props.winner === "Player 2") {
                classColor = "oRed";
            }
            display = <div className={`${classColor}`}>{this.props.winner} wins!</div>
        }
        else if (this.props.tie) {
            display = <div>It's a tie!</div>
        }
        else {
            display = <div>{this.props.name}'s turn</div>
        }

        let reset, nextRound;
        reset = <span className="action" onClick = {this.props.reset}>Reset</span>;
        if (this.props.winner !== "" || this.props.tie){
            nextRound = <span className="action" onClick = {this.props.nextRound}>Next Round</span>;
        }
        if (this.props.winner === "" && !this.props.tie){
            nextRound = <span className="action" onClick = {this.props.clearBoard}>Clear Board</span>;
        }
        return (
            <Row className="header drop-shadow" center="md" middle="md">
                <Col md={4}>
                    {reset}
                </Col>
                <Col md={4}>
                    {display}
                </Col>
                <Col md={4}>
                    {nextRound}
                </Col>
            </Row>
        );
    }
}

export default Header;
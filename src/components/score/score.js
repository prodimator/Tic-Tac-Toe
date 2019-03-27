import React, { Component } from 'react';
import { Row, Col } from "react-flexbox-grid";
import './score.scss';
import Girl from '../../svg/girl.svg';
import Man from '../../svg/man.svg';


function Score(props) {
    return (
        <div className="score drop-shadow">
            <Row center="md">
                <Col md={6}>
                    <div className="player xBlue">
                        <img src={Girl} className="svg" alt="girl" />
                        <p className="name">Player 1</p>
                        <p className="player-score">Score: 3</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="player oRed">
                        <img src={Man} className="svg" alt="man" />
                        <p className="name">Player 2</p>
                        <p className="player-score">Score: 0</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Score;
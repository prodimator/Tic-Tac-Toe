import React from 'react';
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
                        <p className="name">{props.player1.name}</p>
                        <p className="player-score">Score: {props.player1.score}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="player oRed">
                        <img src={Man} className="svg" alt="man" />
                        <p className="name">{props.player2.name}</p>
                        <p className="player-score">Score: {props.player2.score}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Score;
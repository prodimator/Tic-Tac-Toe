import React, { Component } from 'react';
import { Row, Col } from "react-flexbox-grid";
import './header.scss';

function Header(props) {
    return (
        <Row className="header drop-shadow" center="md" middle="md">
            <Col md={12}>
                {props.name}'s turn
            </Col>
        </Row>

    );
}

export default Header;
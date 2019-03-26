import React, { Component } from 'react';
import { Row, Col } from "react-flexbox-grid";

import './header.scss';


function Header(props) {
    return (
        <Row center="md">
            <Col md={12}>
                Hi {props.name}
            </Col>
        </Row>

    );
}

export default Header;
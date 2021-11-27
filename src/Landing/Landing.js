/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Row, Col } from 'reactstrap';
import { Login } from '../Login/Login'
import logo from '../logo.svg'
import { NavBar } from '../NavBar/NavBar';


function Landing(props) {
  return (
    <React.Fragment>
        <NavBar/>
      <Row>
        <Col>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Col>
          <Login />
        </Col>
      </Row>
    </React.Fragment>

  )
}

export { Landing }


import React,{useEffect,useState ,useContext} from "react"
import ResultProvider from "./context"

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Col,Row} from "react-bootstrap";

import RocketAnimation from "./components/RocketAnimation"
import Modal from "./components/Modal"
import Links from "./components/Links"
import BackGroundElements from "./components/BackgroundElements"

import {LogoSvg,LogoPiece} from './StyledComponents/styledNavbar'

import{CopyRightSvg,CopyRecrutmentTaskSvg} from './StyledComponents/styledFooter'


function App() {

  return (
    <div className="App">
      <ResultProvider>
        <Container>
          <LogoSvg />
          <LogoPiece/>
            <Row>
              <Col> 
              <Links/>
              </Col>
              <RocketAnimation/>
              </Row>
              <CopyRightSvg/>
              <CopyRecrutmentTaskSvg/>
            <BackGroundElements/>
        </Container>
         <Modal/>
    </ResultProvider>
    </div>
  );
}

export default App;



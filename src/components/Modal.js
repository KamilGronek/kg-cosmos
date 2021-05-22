import React,{useContext} from 'react'
import {Container,Col,Row} from "react-bootstrap";
import {ModalMain, Header,Title,CloseBtnSvg,Body,FieldTextStatus,
    FieldTextType,TextType,ArrowAsc,ArrowDesc,
    TextStatus,ResultsField,EmptyElement
    } from '../StyledComponents/styledModal';

import {ResultContext} from "../context"
function MyVerticallyCenteredModal(){

  const context = useContext(ResultContext)
    return (
        <ModalMain
        {...context}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Header >
          <Title id="contained-modal-title-vcenter">
            {context.endpoint} 
          </Title>
         <CloseBtnSvg onClick={()=>context.handleCloseBtn()}/>
        </Header>
        <Body>
          <Container>
          <Row>
            <FieldTextStatus sm={12}>
                <FieldTextType>
                  <TextType>
                    {context.endpoint ==="crew"?
                      "Name" : ("Type") 
                    }
                    
                  </TextType>
                  {context.visibleDefault ?
                  (<div style={{display:"flex", position:"relative"}}
                  onClick={()=>context.handleFilter("asc") }
                  >
                    <ArrowAsc/>
                    <ArrowDesc/>
                  </div>) :("")}

                  {context.visibleArrowAsc ?
                  ( <ArrowAsc onClick={()=>context.handleFilterDesc("desc")} />)
                   : ""}
                  {context.visibleArrowDesc ?
                  (
                       <>
                       <EmptyElement>X</EmptyElement>
                       <ArrowDesc  onClick={()=>context.handleFilterAsc("default")}/>
                        </>
                  )
                  : ""}
                </FieldTextType>
                <TextStatus>
                  Status
                </TextStatus>
            </FieldTextStatus>
          </Row>
            <Row 
            style={{height:"230px", overflow:"auto", position:"relative"}}
            >
              <Col sm={6}> 
                {context.getDataArray.map(capsule => (
                <ResultsField key={capsule.id}>
                  {capsule.firstColumn}
                </ResultsField>
                ))}
              </Col>
              <Col sm={6}> {context.getDataArray.map(capsule => (
                <ResultsField key={capsule.id}>
                  {capsule.secondColumn}
                </ResultsField >
                ))}
              </Col>
              <img src="Gradient.png" alt="" style={{ marginTop:"200px", position:"absolute"}}/>
            </Row>
            <Row>
              
            </Row>
          </Container>
        </Body>
      </ModalMain>
    );
  }

export default MyVerticallyCenteredModal

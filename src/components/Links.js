import React,{useContext} from 'react'
import {Col} from "react-bootstrap";
import {ResultContext} from "../context"
import '../App.css';

import {Picture,CapsulesSvg,
        CrewSvg,RocketsSvg,
        StarlinkSvg
  } from '../StyledComponents/styledLinks'

  
function Links() {
    const context = useContext(ResultContext)

    return (
        <>
         <Col>
                  <CapsulesSvg/>
                  <Picture  src={process.env.PUBLIC_URL +"capsules.png"} alt=""  variant="primary" onClick={() => context.handleChangeCapsules()}/>
                  <CrewSvg/>
                  <Picture src={process.env.PUBLIC_URL +"crew.png"} alt=""  variant="primary" onClick={() => context.handleChangeCrew()} />
                </Col>
                <Col>
                  <RocketsSvg/>
                  <Picture src={process.env.PUBLIC_URL +"rockets.png"} alt=""   variant="primary" onClick={() => context.handleChangeRockets()} />
                  <StarlinkSvg/>
                  <Picture src={process.env.PUBLIC_URL +"starlinkPic.png"} alt=""   variant="primary" onClick={() => context.handleChangeStarlink()} />
        </Col>
      </>
    )
}

export default Links

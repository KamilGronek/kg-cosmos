import styled from "styled-components";
import {Button} from "react-bootstrap";
import {ReactComponent as Rocket} from "../svgIllustration/Rocket.svg";

export const BtnRocket = styled(Button)
`
height: 48px;
width: 184px;
border-radius: 8px;
background: #7860D7;
margin-top:24px;
styleName: 16/Semi Bold;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
// line-height: 24px;
letter-spacing: 0px;
text-align: left;
padding-left: 32px
`


export const RocketPic = styled(Rocket)
`
height: 140px;
width: 102px;
left: 250px;
top: -70px;
border-radius: 0px;
position: absolute;
z-index:1000;
`

export const Smoke1 = styled.img
`
height: 50px;
width: 52px;
left: 1120px;
top: 160px;
border-radius: 0px;
position:absolute
`

export const Smoke2 = styled.img
`
height: 62px;
width: 65px;
left: 980px;
top: 150px;
border-radius: 0px;
position:absolute

`
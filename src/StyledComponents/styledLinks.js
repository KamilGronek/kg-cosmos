import styled from "styled-components";
import {ReactComponent as CapsulesText} from "../svgLinks/CapsulesText.svg";
import {ReactComponent as CrewText} from "../svgLinks/CrewText.svg";
import {ReactComponent as RocketsText} from "../svgLinks/RocketsText.svg";
import {ReactComponent as StarlinkText} from "../svgLinks/StarlinkText.svg";

export const Picture = styled.img
`
    cursor: url(Pointer.png) 4 12, auto;
    padding:15px;
    height: 238px;
    weight: 190px;
    border-radius: 35px;
`


export const CapsulesSvg = styled(CapsulesText)
`
    position:absolute;
    height: 20px;
    width: 64px;
    top: 324px;
    margin: 0 63px;
`

export const CrewSvg = styled(CrewText)
`
    position:absolute;
    height: 20px;
    width: 36px;
    top: 324px;
    margin: 0 63px;
`

export const RocketsSvg = styled(RocketsText)
`
    position:absolute;
    height: 20px;
    width: 55px;
    top: 564px;
    margin: 0 63px;
`

export const StarlinkSvg = styled(StarlinkText)
`
    position:absolute;
    height: 20px;
    width: 52px;
    top: 564px;
    margin: 0 63px;
`
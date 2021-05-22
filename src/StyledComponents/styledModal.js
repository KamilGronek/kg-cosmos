import styled from "styled-components";
import {Modal,Col,Row} from "react-bootstrap";
import {ReactComponent as ArrowUp} from "../svgModal/ArrowUp.svg";
import {ReactComponent as ArrowDown} from "../svgModal/ArrowDown.svg";
import {ReactComponent as CloseBtn} from "../svgModal/CloseBtn.svg";

export const ModalMain = styled(Modal)
`
.modal-content {
  width: 540px !important;
  margin: 0 auto !important;
  height: 360px !important;
  border-radius: 16px !important;
  border-style: none !important;
  background: linear-gradient(0deg, #2b224a, #2b224a);
}
`;

export const Header = styled(Modal.Header)
`
  padding: 20px 29px 16px 24px !important;
  border: none !important;
`;

export const CloseBtnSvg = styled(CloseBtn)
`
 margin-top :9px;
 cursor:pointer;
`

export const Title = styled(Modal.Title)
`
  font-size: 20px !important;
  font: Inter !important;
  font-style: Bold !important;
  font-weight: 700 !important;
  color: #ffffff;
`;

export const Body = styled(Modal.Body)
`
  padding-top: 0 !important;
  padding-right: 24px !important;
  padding-left: 24px !important;
  position:relative;
`;

export const FieldTextStatus = styled(Col)
`
  display: flex;
  justify-content: flex-start;
  background: #342a56;
  border-radius: 4px;
  padding: 0 0 !important;

`;

export const FieldTextType = styled.div
`
  display: flex;
  height: 40px;
  width: 246px;
  border-radius: 4px;
  background: #251d42;
  padding-left: 16px;
  padding-right: 14px;

`

export const TextType = styled.div
`
width: 194px;
height: 20px;
padding: 10px 36px 10px 0px;
font-size: 14px;
color: #a094c6;
font-weight: 600;
`


export const TextStatus = styled.div
`
font-size: 14px;
padding: 10px 36px 10px 16px;
color: #a094c6;
font-weight: 600;
`


export const ResultsField = styled.div
`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #d2cbe9;
    margin-top: 16px;
    margin-bottom: 28px;
`;

export const ArrowAsc = styled(ArrowUp)
`
cursor: url(Pointer.png) 4 12, auto;
width:6px;
height:12px;
margin-top:14px;
margin-left:8px;

`

export const ArrowDesc = styled(ArrowDown)
`
cursor: url(Pointer.png) 4 12, auto;
width:6px;
height:12px;
margin-top:14px;
`

export const EmptyElement = styled.div
`
color:white,
marginLeft:4px,
 visibility:hidden,
`
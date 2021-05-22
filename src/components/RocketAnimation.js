import React,{useRef} from "react";
import {BtnRocket,RocketPic,Smoke1,Smoke2} from '../StyledComponents/styledIllustration';
import {Col} from "react-bootstrap";
import gsap from 'gsap';

function RocketAnimation(){

  let rocketItem = useRef(null)

const handleMoveRocket =()=>{
  const tl = gsap.timeline({defaults:{ease:'power3.inOut'}});
  tl.fromTo(rocketItem, {}, {duration: 2, y: "-=100"})
.fromTo(rocketItem,{},{duration: 2,x:"-=200"})
.fromTo(rocketItem,{},{duration: 2,y: "+=100"})
.fromTo(rocketItem,{},{duration: 2,x: "+=200"})
}

return(
  <Col>
  <Col>
    <Smoke2 src={process.env.PUBLIC_URL + "/smoke2.png"} alt=""/>
    <div  style={{position:"absolute"}} ref={el=>{rocketItem=el}} >
      <RocketPic/>
    </div>
  <Smoke1 src={process.env.PUBLIC_URL + "/smoke1.png"} alt=""/>
  </Col>
  <Col> <img src={process.env.PUBLIC_URL +"/planet.png"} alt="" /></Col>
  <Col>
    <BtnRocket onClick={handleMoveRocket}>
      Launch Rocket!
    </BtnRocket>
  </Col>
</Col>
)

}
export default RocketAnimation;

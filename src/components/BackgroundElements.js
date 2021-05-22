import React from 'react'

import {
        CircleLeftSide,CircleTopSide,CircleRightSide,RedDotSvg,
        SecondRedDotSvg,VioletDotSvg,GreenDotSvg
      } from '../StyledComponents/styledBackgroundElement';

function BackgroundElements() {
    return (
        <>
           <CircleTopSide/>
              <CircleRightSide/>
              <CircleLeftSide/>
              <RedDotSvg/>
              <SecondRedDotSvg/>
              <VioletDotSvg/>
              <GreenDotSvg/>
        </>
    )
}

export default BackgroundElements

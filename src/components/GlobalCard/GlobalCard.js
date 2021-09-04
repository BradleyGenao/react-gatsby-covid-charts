import React from "react"
import styled from "styled-components"
import Video from '../../assets/videos/card-bg.mp4'

const GlobalCard = () => {
  return (
    <CardContainer>
      <CardBg>
        <VideoBg src={Video}  type="video/mp4" autoPlay loop muted playsInline />
        <CardContent>
          <CardItem>
            <CardHeading>Global</CardHeading>

            <div>
              <h3>Cases</h3>
              <p>100,000,000,000</p>
            </div>

            <div>
              <h3>Deaths </h3>
              <p>100,000</p>
            </div>
          </CardItem>
        </CardContent>
      </CardBg>
    </CardContainer>
  )
}

export default GlobalCard

const CardContainer = styled.div`
position: relative;
`

const CardBg = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 470px;
`

const VideoBg = styled.video`
  z-index: 0;
  max-width: 100%;
  height: auto;



`

const CardItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const CardHeading = styled.h1`
color: white;
`

const CardContent = styled.div``

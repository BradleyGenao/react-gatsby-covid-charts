import React from "react"
import styled from "styled-components"
import Video from "../../assets/videos/card-bg.mp4"

const GlobalCard = () => {
  return (
    <CardContainer>
      <CardBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
        <CardContent>
          <CardItem>
            <CardHeading>
              <h1>Global</h1>
            </CardHeading>

            <CardDataContainer>
              <h3>Cases</h3>
              <p>100,000,000,000</p>
              <h3>Deaths </h3>
              <p>100,000</p>
            </CardDataContainer>
          </CardItem>
        </CardContent>
      </CardBg>
    </CardContainer>
  )
}

export default GlobalCard

const CardContainer = styled.div`
  position: relative;
  display: flex;
`




const CardDataContainer = styled.div`
  color: white;
  margin: 15px;
`


const CardBg = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin-top: -75px;
`

const VideoBg = styled.video`
  z-index: 0;

  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const CardItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const CardHeading = styled.div`
  color: white;
  font-size: clamp(1.5rem, 6vw, 3.6rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;

  h1 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`

const CardContent = styled.div``

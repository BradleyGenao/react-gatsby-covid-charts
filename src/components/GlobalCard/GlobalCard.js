import React from "react"
import styled from "styled-components"
import Marquee from "react-fast-marquee"
import { RiVirusFill } from "react-icons/ri"
import { GiTombstone } from "react-icons/gi"
import Video from "../../assets/videos/card-bg.mp4"
import { numCommaSeparator } from "../utils/helperFunctions"

const GlobalCard = ({ confirmed, deaths, lastUpdate }) => {
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
              <Data>
                <h3 style={{ color: "blue" }}>Realtime Covid-19 Cases</h3>

                <span>
                  <RiVirusFill color="blue" size="27px" />
                  <p style={{ paddingLeft: "1rem", fontStyle: 'italic' }}>
                    {numCommaSeparator(confirmed)}
                  </p>
                </span>
                <Marquee
                  style={{
                    paddingTop: "8rem",
                    width: "355px",
                    overflow: "hidden",
                  }}
                  pauseOnHover="true"
                  gradient="false"
                  gradientWidth="50"
                >
                  <h5 style={{ fontSize: 10 }}>
                    Totals last updated on {lastUpdate}
                  </h5>
                </Marquee>
              </Data>
              <Data>
                <h3 style={{ color: "red" }}>Realtime Covid-19 Deaths</h3>

                <span>
                  <GiTombstone color="red" size="27px" />
                  <p style={{ paddingLeft: "1rem", fontStyle: 'italic' }}>
                    {numCommaSeparator(deaths)}
                  </p>
                </span>
              </Data>
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
  height: 100vh;

  @media screen and (max-width: 550px) {
    width: 550px;
    height: 550px;
  }
`

const CardDataContainer = styled.div`
  color: white;
  margin: 15px;
  padding-top: 1rem;

  justify-content: space-between;

  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 500px) {
    width: 500px;
    height: 500px;
  }
`

const Data = styled.div`
  width: 410px;
  padding-left: 0.2rem;
  height: 390px;

  @media screen and (max-width: 750px) {
    width: 400;
    height: 800;
  }

  h3 {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    margin-bottom: 1.5rem;
    letter-spacing: 2px;
    padding-bottom: 0.4rem;
  }
  p {
    color: white;
    font-size: clamp(1.5rem, 6vw, 1rem);
    padding-right: 1rem;
    letter-spacing: 2px;
    flex-grow: 4;
    padding-left: 0.9rem;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const CardBg = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
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

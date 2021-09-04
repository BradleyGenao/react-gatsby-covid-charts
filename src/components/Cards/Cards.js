import React from "react"
import { RiVirusFill } from "react-icons/ri"
import { GiTombstone } from "react-icons/gi"
import styled from "styled-components"
import Marquee from "react-fast-marquee"
import Video from "../../assets/videos/card-bg.mp4"
import { numCommaSeparator } from '../../../utils/helperFunctions'

const Cards = ({ confirmed, deaths, lastUpdate }) => {


  return (
    <>
      <CardsContainer>
        <CardHeading>
          <CardBg>
            <VideoBg
              src={Video}
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </CardBg>
          <CardHeadingCases>Global Numbers</CardHeadingCases>
        </CardHeading>

        <ContentWrapper>
          <Column>
            <CardCases>
              <h3>
                <span>
                  <RiVirusFill color="rgb(0, 68, 137)" />
                </span>
                Cases
              </h3>
              <h5>{numCommaSeparator(confirmed)}</h5>
            </CardCases>
          </Column>
          <Column>
            <CardDeaths>
              <h3>
                Deaths
                <span>
                  <GiTombstone color="#ff0303" />
                </span>
              </h3>
              <h5>{numCommaSeparator(deaths)}</h5>
            </CardDeaths>
          </Column>
        </ContentWrapper>
      </CardsContainer>
      <UpdateMarquee pauseOnHover="true">
        <h5>Totals last updated on {lastUpdate}</h5>
      </UpdateMarquee>
    </>
  )
}

export default Cards

const UpdateMarquee = styled(Marquee)`
  h5 {
    font-size: 11px;
    padding-top: 0.3rem;
    background-color: transparent;
  }
`

const VideoBg = styled.video`
  width: 100%;
  height: 60%;
  -o-object-fit: cover;
  object-fit: cover;
`
const CardHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
  letter-spacing: -0.6px;
  word-spacing: 2px;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: none;
`

const CardHeadingCases = styled.span`
  font-size: clamp(1.2rem, 5vw, 3rem);
  letter-spacing: -0.6px;
  word-spacing: 2px;
  color: whitesmoke;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: none;
`

const CardsContainer = styled.div`
  width: 100%;
  background: black;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
`

const ContentWrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  -webkit-box-shadow: 8px -2px 19px 2px #000000;
  box-shadow: 8px -2px 19px 2px #000000;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CardCases = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    border: 5px outset rgb(0, 68, 137);
    color: white;
  }

  h5 {
    color: white;
  }

  span {
    padding-top: 0.2rem;
    float: right;
    padding-right: 0.5rem;
  }

  p {
    color: #3b3b3b;
  }
`

const CardDeaths = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    border: 5px outset #ff0303;
    color: white;
  }

  h5 {
    color: white;
  }

  span {
    padding-top: 0.2rem;
    float: right;
    padding-right: 0.5rem;
  }

  p {
    color: #3b3b3b;
  }
`

const Column = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const CardBg = styled.div`
  left: 0;
  right: 0;
  width: 100%;
  height: 24%;
  overflow: hidden;
`

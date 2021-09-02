import React from "react"
import { RiVirusFill } from "react-icons/ri"
import { GiTombstone } from "react-icons/gi"
import styled from "styled-components"
import Marquee from "react-fast-marquee"

const Cards = ({ confirmed, deaths, lastUpdate }) => {
  function separator(numb) {
    var str = numb.toString().split(".")
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return str.join(".")
  }

  return (
    <CardsContainer>
      <CardHeading>Below are some statistics</CardHeading>
      <ContentWrapper>
        <Column>
          <Card>
            <h3>
              <span>
                <RiVirusFill color="rgb(0, 68, 137)" />
              </span>
              Confirmed Covid Cases
            </h3>
            <h5>Total: {separator(confirmed)}</h5>
          </Card>
        </Column>
        <Column>
          <Card>
            <h3>
              Confirmed Covid Deaths
              <span>
                <GiTombstone color="rgb(0, 68, 137)" />
              </span>
            </h3>
            <h5>Total: {separator(deaths)}</h5>
          </Card>
        </Column>
      </ContentWrapper>

      <Update pauseOnHover="true">
        <h5>Totals last updated on {lastUpdate}</h5>
      </Update>
    </CardsContainer>
  )
}

export default Cards

const Update = styled(Marquee)`
  h5 {
    font-size: 11px;
    padding-top: 0.5rem;
    background-color: transparent;
  }
`
const CardHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const CardsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
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

const Card = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    border: 5px outset rgb(0, 68, 137);
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

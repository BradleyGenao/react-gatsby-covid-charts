import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Marquee from "react-fast-marquee"

const Cards = ({confirmed, deaths, lastUpdate}) => {
  function separator(numb) {
    var str = numb.toString().split(".")
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return str.join(".")
  }

  // const data = useStaticQuery(graphql`
  //   query HeaderQuery {
  //     customApi {
  //       confirmed {
  //         value
  //       }
  //       deaths {
  //         value
  //       }
  //       lastUpdate(formatString: "MMMM DD, YYYY")
  //     }
  //   }
  // `)

  return (
    <CardsContainer>
      <ContentWrapper>
        <Column>
          <Card>
            <h3>Confirmed Cases</h3>
            <h5>Total: {separator(confirmed)}</h5>
          </Card>
        </Column>
        <Column>
          <Card>
            <h3>Confirmed Deaths</h3>
            <h5>Total: {separator(deaths)}</h5>
          </Card>
        </Column>
        <Marquee>
          <h5>Last Updated on {lastUpdate}</h5>
        </Marquee>
      </ContentWrapper>
    </CardsContainer>
  )
}

export default Cards

const CardsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  box-sizing: border-box;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  opacity: 1;

  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    border: 5px groove rgba(28, 110, 164, 0.8);
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

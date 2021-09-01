import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Cards = () => {
  function separator(numb) {
    var str = numb.toString().split(".")
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return str.join(".")
  }

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      customApi {
        confirmed {
          value
        }
        deaths {
          value
        }
        lastUpdate(formatString: "MMMM DD, YYYY")
      }
    }
  `)

  return (
    <CardsContainer>
      <ContentWrapper>
        <Column>
          <Data>
            <h3>Confirmed Cases</h3>
            <h5>Total: {separator(data.customApi.confirmed.value)}</h5>
            <h5>Last Updated on {data.customApi.lastUpdate}</h5>
          </Data>
        </Column>
        <Column>
          <Data>
            <h3>Confirmed Cases</h3>
            <h5>Total: {separator(data.customApi.deaths.value)}</h5>
            <h5>Last Updated on {data.customApi.lastUpdate}</h5>
          </Data>
        </Column>
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
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Data = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
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

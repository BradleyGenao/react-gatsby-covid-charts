import React from "react"
import styled from "styled-components"

const DailyStats = () => {
  return (
    <Container>
      <Heading>Daily Stats</Heading>

      <Wrapper>
        <CountriesContainer>
          <CountriesList>
            <h1>US</h1>
          </CountriesList>

          <CountriesChart>
            <h1>Countries Chart</h1>
          </CountriesChart>
        </CountriesContainer>
        <GlobalContainer>
          <GlobalHeading>
            <h1>Global Charts</h1>
          </GlobalHeading>
          <ChartContainer>
            <h1>Chart Data</h1>
          </ChartContainer>
        </GlobalContainer>
      </Wrapper>
    </Container>
  )
}

export default DailyStats

const Container = styled.div`
  height: 60vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 3rem calc((100vw - 1300px) / 2);
  width: 100%;
  background-color: black;
`

const Heading = styled.h1`
  text-align: center;

  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const CountriesContainer = styled.div``

const CountriesList = styled.div``

const CountriesChart = styled.div``

const GlobalContainer = styled.div``

const GlobalHeading = styled.div``

const ChartContainer = styled.div``

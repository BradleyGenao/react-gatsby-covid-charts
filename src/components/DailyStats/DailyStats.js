import React from "react"
import styled from "styled-components"
import { Line } from "react-chartjs-2"
import Bar from "./CountryBarChart"

const DailyStats = dailyData => {
  return (
    <Container>
      <Heading>Daily Statistics</Heading>

      <Wrapper>
        <CountriesContainer>
          <CountriesList>
            <h1>Country</h1>
          </CountriesList>

          <CountriesChart>
            <Bar />
          </CountriesChart>
        </CountriesContainer>
        <GlobalContainer>
          <GlobalHeading>
            <h1>Globally</h1>
          </GlobalHeading>
          <ChartContainer>
            <Line
              options={{
                responsive: true,
                scales: {
                  y: {
                    // defining min and max so hiding the dataset does not change scale range
                  },
                },
              }}
              data={{
                labels: dailyData.data.map(({ reportDate }) => reportDate),

                datasets: [
                  {
                    data: dailyData.data.map(
                      ({ totalConfirmed }) => totalConfirmed
                    ),
                    label: "Infections",

                    backgroundColor: "#ACDF87",
                    borderColor: [
                      "#1E5631",
                      "#A4DE02",
                      "#76BA1B",
                      "#4C9A2A",
                      "#ACDF87",
                      "#68BB59",
                    ],
                    borderWidth: 1,
                    tension: 0.3,
                  },
                  {
                    data: dailyData.data.map(({ deaths }) => deaths.total),
                    label: "Deaths",
                    borderColor: "#771318",
                    backgroundColor: [
                      "#A31116",
                      "#8F171B",
                      "#831419",
                      "#771318",
                      "#E00029",
                      "#BC0017",
                      "#9B000A",
                    ],
                    fill: true,
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </ChartContainer>
        </GlobalContainer>
      </Wrapper>
    </Container>
  )
}

export default DailyStats

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  background-color: black;
`

const Heading = styled.h1`
  text-align: center;

  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const CountriesContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 40vw;
  background-color: whitesmoke;
  border: 4px solid black;
`

const CountriesList = styled.div`
  background: #73a9c2;
  background: -moz-linear-gradient(left, #73a9c2 0%, #6d1d05 100%);
  background: -webkit-linear-gradient(left, #73a9c2 0%, #6d1d05 100%);
  background: linear-gradient(to right, #73a9c2 0%, #6d1d05 100%);
  text-align: center;
  padding: 2rem;
`

const CountriesChart = styled.div`
  color: black;
`

const GlobalContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 40vw;
  background-color: whitesmoke;
  border: 4px solid black;
`

const GlobalHeading = styled.div`
  background: #73a9c2;
  background: -moz-linear-gradient(left, #73a9c2 0%, #6d1d05 100%);
  background: -webkit-linear-gradient(left, #73a9c2 0%, #6d1d05 100%);
  background: linear-gradient(to right, #73a9c2 0%, #6d1d05 100%);
  text-align: center;
  padding: 2rem;
`
const ChartContainer = styled.div`
  padding-top: 1.5rem;
`

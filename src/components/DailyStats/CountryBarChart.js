import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Bar } from "react-chartjs-2"

export default function CountryBarChart() {
  const data = useStaticQuery(graphql`
    query CountriesQuery {
      countries {
        countries {
          confirmed
          deaths
          countryRegion
          lastUpdate
          lat
          long
          provinceState
          iso2
          cases28Days
          deaths28Days
        }
      }
    }
  `)

  const countriesData = data.countries.countries.map(country => country)
  const randomIndex = Math.floor(Math.random() * countriesData.length)

  const randomCountryChoice = countriesData[randomIndex]
  const provinceState = randomCountryChoice.provinceState

  return (
    <>
      <h2>Province/State: {provinceState ? provinceState : randomCountryChoice.countryRegion}</h2>
      <Bar
        data={{
          labels: ["Infected", "Infected-28 days", "Deaths", "Deaths-28days"],
          datasets: [
            {
              label: randomCountryChoice.countryRegion,
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
                "rgba(242, 234, 0, 0.5)",
              ],
              hoverBackgroundColor: [
                "rgba(0, 77, 153)",
                "rgba(30, 102, 49)",
                "rgba(255, 51, 51)",
                "rgba(204, 153, 0)",
              ],
              data: [
                randomCountryChoice.confirmed,
                randomCountryChoice.cases28Days,
                randomCountryChoice.deaths,
                randomCountryChoice.deaths28Days,
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: `Current state in ${randomCountryChoice.countryRegion}`,
          },
        }}
      />
    </>
  )
}

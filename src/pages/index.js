import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Hero, Stats, GlobalCard } from "../components"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  
  return (
    <Layout>
      <Seo title="Home" />

      <Hero />
      <GlobalCard
        confirmed={data.covidGlobal.confirmed.value}
        deaths={data.covidGlobal.deaths.value}
        lastUpdate={data.covidGlobal.lastUpdate}
      />
      <Stats />
    </Layout>
  )
}

export default IndexPage

export const homePageQuery = graphql`
  query MyQuery {
    covidGlobal {
      confirmed {
        value
      }
      deaths {
        value
      }
      lastUpdate(formatString: "MMMM DD, YYYY hh:mm A")
    }
    covidDaily {
      data {
        reportDate
        confirmed {
          total
        }
        deaths {
          total
        }
        active
      }
    }
    countiresJson {
      name
      code
    }
    countriesConfirmed {
      data {
        uid
        confirmed
        deaths
        iso2
        lastUpdate
        lat
        long
        countryRegion
      }
    }
    countriesDeath {
      data {
        uid
        confirmed
        deaths
        iso2
        lastUpdate
        lat
        long
        countryRegion
      }
    }
  }
`

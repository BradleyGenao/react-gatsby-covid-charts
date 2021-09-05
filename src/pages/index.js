import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Hero, Stats, GlobalCard, DailyStats } from "../components"
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
      <DailyStats/>
    </Layout>
  )
}


export const homePageQuery = graphql`
  query MainQuery {

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

export default IndexPage



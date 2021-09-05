import * as React from "react"
import { graphql } from "gatsby"
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
      daily {
        totalConfirmed
        deaths {
          total
        }
        reportDate(formatString: "MMMM DD, YYYY hh:mm A")
      }
    }
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
      }
    }
    countiresListJson {
      code
      name
    }
  }
`

export default IndexPage



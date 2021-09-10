import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Hero, GlobalStats, DailyStats } from "../components"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {

  const dailyData = data.covidDaily.daily.map((day) => day)

  return (
    <Layout>
      <Seo title="Home" />

      <Hero />
      <GlobalStats
        confirmed={data.covidGlobal.confirmed.value}
        deaths={data.covidGlobal.deaths.value}
        lastUpdate={data.covidGlobal.lastUpdate}
      />

      <DailyStats data={dailyData}  />
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

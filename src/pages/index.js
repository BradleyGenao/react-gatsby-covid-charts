import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Hero, Cards, Stats, GlobalCard } from "../components"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  //const dailyDates = data.covidDaily.data.map(({ reportDate }) => reportDate)

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
    covidGlobal {
      lastUpdate(formatString: "MMMM DD, YYYY")
      deaths {
        value
      }
      confirmed {
        value
      }
    }
  }
`

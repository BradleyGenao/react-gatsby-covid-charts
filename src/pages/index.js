import * as React from "react"
import { graphql,} from "gatsby"
import Layout from "../components/layout"
import { Hero, Cards, Stats } from "../components"
import Seo from "../components/seo"


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />

      <Hero />

      <Cards
        confirmed={data.globalCovid.confirmed.value}
        deaths={data.globalCovid.deaths.value}
        lastUpdate={data.globalCovid.lastUpdate}
      />
      <Stats/>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    globalCovid {
      lastUpdate(formatString: "MMMM DD, YYYY")
      confirmed {
        value
      }
      deaths {
        value
      }
    }
  }
`



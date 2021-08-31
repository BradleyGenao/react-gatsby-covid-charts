import * as React from "react"

import Layout from "../components/layout"
import { Hero, Cards } from "../components"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Cards />
  </Layout>
)

export default IndexPage

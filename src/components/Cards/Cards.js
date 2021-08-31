import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'

const Cards = () => {

const data = useStaticQuery(graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
return (
  <header>
    <h1>{data.site.siteMetadata.title}</h1>
  </header>
)
}

export default Cards

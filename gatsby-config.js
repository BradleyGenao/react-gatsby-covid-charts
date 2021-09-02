
module.exports = {
  siteMetadata: {
    title: `Covid Data Tracker`,
    description: `Website that displays covid 19 data`,
    author: `Bradley Genao`,
    siteUrl: `https://genao.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://covid19.mathdro.id/api",
        rootKey: "globalCovid",
        schemas: {
          confirmed: `
          value: Int
          detail: String
          `,

          recovered: `
          value: Int
          detail: String
          `,
          deaths: `
          value: Int
          detail: String
          `,
          dailySummary: `value: String`,
          dailyTimeSeries: `
          pattern: String
          example: String
          `,
          image: `url: String`,
          source: `url: String`,
          countries: `url: String`,
          countryDetail: `
          pattern: String
          example: String
          `,
          lastUpdate: `date: Date`,
        },
      },
    },
  ],
}

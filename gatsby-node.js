const axios = require("axios")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { data: daily } = await axios.get(
    `https://covid19.mathdro.id/api/daily`
  )
  const { data: countries } = await axios.get(
    `https://covid19.mathdro.id/api/confirmed`
  )
  const { data: global } = await axios.get(`https://covid19.mathdro.id/api`)

  actions.createNode({
    daily,

    id: createNodeId(daily[0].reportDate),
    internal: {
      type: "covidDaily",
      contentDigest: createContentDigest(daily),
    },
  })

  actions.createNode({
    countries,

    id: createNodeId(countries[0].uid),
    internal: {
      type: "countries",
      contentDigest: createContentDigest(countries),
    },
  })

  actions.createNode({
    ...global,

    id: createNodeId(global.lastUpdate),
    internal: {
      type: "covidGlobal",
      contentDigest: createContentDigest(global),
    },
  })
}

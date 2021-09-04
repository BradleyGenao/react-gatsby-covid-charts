const axios = require("axios")

const {
  fetchGlobalCovidData,
  fetchCountriesDeath,
} = require("./utils/fetchApi")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  fetchGlobalCovidData(actions, createNodeId, createContentDigest)
  fetchCountriesDeath(actions, createNodeId, createContentDigest)
  const { data } = await axios.get(`https://covid19.mathdro.id/api/daily`)

  actions.createNode({
    data,

    id: createNodeId(data[0].reportDate),
    internal: {
      type: "covidDaily",
      contentDigest: createContentDigest(data),
    },
  })
}



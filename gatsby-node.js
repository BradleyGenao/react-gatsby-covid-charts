const axios = require("axios")
const {fetchDailyCovidData, fetchGlobalCovidData, fetchNasaData} = require("./utils/fetchApis")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  fetchNasaData(actions, createNodeId, createContentDigest)
  //fetchDailyCovidData(actions, createNodeId, createContentDigest)
  fetchGlobalCovidData(actions, createNodeId, createContentDigest)
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

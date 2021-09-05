const axios = require("axios")

async function fetchGlobalCovidData(
  actions,
  createNodeId,
  createContentDigest
) {
  const { data } = await axios.get(`https://covid19.mathdro.id/api`)

  actions.createNode({
    ...data,

    id: createNodeId(data.lastUpdate),
    internal: {
      type: "covidGlobal",
      contentDigest: createContentDigest(data),
    },
  })
}

async function fetchCountriesDeath(actions, createNodeId, createContentDigest) {
  const { data } = await axios.get(`https://covid19.mathdro.id/api/deaths`)

  actions.createNode({
    data,

    id: createNodeId(data[0].uid),
    internal: {
      type: "countriesDeath",
      contentDigest: createContentDigest(data),
    },
  })
}

async function fetchCountriesConfirmed(
  actions,
  createNodeId,
  createContentDigest
) {
  const { data } = await axios.get(`https://covid19.mathdro.id/api/confirmed`)

  actions.createNode({
    data,

    id: createNodeId(data[0].uid),
    internal: {
      type: "countriesConfirmed",
      contentDigest: createContentDigest(data),
    },
  })
}

module.exports = {
  fetchGlobalCovidData,
  fetchCountriesDeath,
  fetchCountriesConfirmed,
  fetchCountriesConfirmed,
}

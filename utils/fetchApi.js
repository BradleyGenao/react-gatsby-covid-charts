const axios = require("axios")

async function fetchNasaData(actions, createNodeId, createContentDigest) {
  const { data } = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=cwSN6m8NimhARv7ZFU6OpoStUcmyZw8bbKJz3QPw`
  )

  actions.createNode({
    ...data,
    id: createNodeId(data.date),
    internal: {
      type: "apod",
      contentDigest: createContentDigest(data),
    },
  })
}

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

module.exports = { fetchGlobalCovidData, fetchNasaData, fetchCountriesDeath }

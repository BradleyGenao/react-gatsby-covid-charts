const axios = require("axios")


exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
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

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
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


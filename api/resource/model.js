const db = require("../../data/dbConfig.js");

const getResources = async () => {
  const resources = await db("resources");

  return resources;
};

module.exports = { getResources };

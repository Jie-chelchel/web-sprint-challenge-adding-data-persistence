const db = require("../../data/dbConfig.js");

const getResources = async () => {
  const resources = await db("resources");
  return resources;
};

const createResource = async (resource) => {
  const [newResourceID] = await db("resources").insert(resource);
  const newResource = await db("resources")
    .where({
      resource_id: newResourceID,
    })
    .first();
  return newResource;
};

module.exports = { getResources, createResource };

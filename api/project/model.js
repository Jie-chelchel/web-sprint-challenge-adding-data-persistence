const db = require("../../data/dbConfig.js");

const getProjects = () => {
  return db("projects");
};

async function createProject(project) {
  const [project_id] = await db("projects").insert(project);
  return getProjects().where({ project_id }).first();
}

module.exports = {
  getProjects,
  createProject,
};

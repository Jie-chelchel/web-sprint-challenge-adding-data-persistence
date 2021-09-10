const db = require("../../data/dbConfig.js");

const getProjects = async () => {
  const projects = await db("projects");
  projects.map((p) => {
    p.project_completed = p.project_completed === 0 ? false : true;
  });
  return projects;
};

async function createProject(project) {
  const [project_id] = await db("projects").insert(project);
  const newProject = await db("projects").where({ project_id }).first();
  //convert 1 or 0 to boolean
  newProject.project_completed =
    newProject.project_completed === 0 ? false : true;
  return newProject;
}

module.exports = {
  getProjects,
  createProject,
};

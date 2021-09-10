const db = require("../../data/dbConfig.js");
const getTasks = async () => {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select("t.*", "p.project_name", "p.project_description");

  tasks.map((t) => {
    t.task_completed = !t.task_completed ? false : true;
  });

  return tasks;
};

module.exports = {
  getTasks,
};

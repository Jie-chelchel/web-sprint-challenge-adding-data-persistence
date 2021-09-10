const db = require("../../data/dbConfig.js");

const getTasks = async () => {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select("t.*", "p.project_name", "p.project_description");
  //convert 1 or 0 to boolean
  tasks.map((t) => {
    t.task_completed = !t.task_completed ? false : true;
  });
  return tasks;
};

const createTask = async (task) => {
  const [newTaskId] = await db("tasks").insert(task);
  const newTask = await db("tasks").where({ task_id: newTaskId }).first();
  newTask.task_completed = !newTask.task_completed ? false : true;
  return newTask;
};

module.exports = {
  getTasks,
  createTask,
};

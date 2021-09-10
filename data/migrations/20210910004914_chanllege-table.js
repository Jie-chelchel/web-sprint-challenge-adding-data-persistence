exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 128).notNullable();
      table.string("project_description", 1024);
      table.boolean("project_completed").notNullable();
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name", 256).notNullable().unique();
      table.string("resource_description", 1024);
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description", 1024).notNullable();
      table.string("task_notes");
      table.boolean("task_completed").notNullable();

      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("project_resources", (table) => {
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = async function (knex) {
  // SO FREAKIN' EASY TO GET WRONG
  await knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources");
};

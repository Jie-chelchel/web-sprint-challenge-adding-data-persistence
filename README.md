# Adding Data Persistence Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Data Persistence**. During this sprint, you studied **RDBMS, including SQL, multi-table queries, and data modeling**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a database based on given specifications**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers a few days after the challenge submission. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Run `npm install` to install your dependencies.
- [ ] Run tests locally executing `npm test`.

## Project Instructions

### Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Files to Complete

1. `package.json`
2. `index.js`
3. `api/server.js`
4. `model.js` inside `api/project`, `api/resource` and `api/task`
5. `router.js` inside `api/project`, `api/resource` and `api/task`
6. migration file(s)
7. seed file(s) **optional**

### Required Dependencies

The project needs some additional NPM dependencies in order to work.

### Required Scripts

Add `"start"`. `"server"`, `"migrate"` and `"rollback"` scripts to the `package.json` file.

### Required Tables

Build the migration(s) in Knex inside the `data/migrations` folder using appropriate data types and constraints. **You must use the table names and the column names described below.** To give a primary key a name different than `id`, do `table.increments("project_id")` instead of `table.increments()`.

- [ ] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

  - [ ] `project_id` - primary key
  - [ ] `project_name` - required
  - [ ] `project_description` - optional
  - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided

- [ ] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

  - [ ] `resource_id` - primary key
  - [ ] `resource_name` - required and unique
  - [ ] `resource_description` - optional

- [ ] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

  - [ ] `task_id` - primary key
  - [ ] `task_description` - required
  - [ ] `task_notes` - optional
  - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
  - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table

- [ ] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.

### Required Endpoints

Build an API inside the `api` folder with endpoints for:

- [ ] `[POST] /api/resources`

  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [ ] `[GET] /api/resources`

  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

- [ ] `[POST] /api/projects`

  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [ ] `[GET] /api/projects`

  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

- [ ] `[POST] /api/tasks`

  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [ ] `[GET] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Each task must include `project_name` and `project_description`
  - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

**Notes:**

- Run tests locally by executing `npm run test`. Tests will be very broken until you flesh out the project sufficiently.
- You are welcome to create additional files for middlewares etc, but **do not move or rename existing files** or folders.
- Do not make changes to your `package.json` except to add **additional** dependencies and scripts. Do not update existing packages.
- In your solution, it is essential that you follow best practices and produce clean and professional results.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain the difference between Relational Databases and SQL.
   A relational database organizes data into tables which are related to each other. It allows you
   to retrieve an entirely new table from data in one or more tables with a single query.
   SQL is a standard language. We use it to query Relational Databases.
   s
2. Why do tables need a Primary Key?
   A primary keys will provide a unique value to identify the individual rows in your tables. Since each row is uniquely identified, you can relate that table to a different table by storing the primary key in a column of the related table. In the related table, we will refer it as a foreign key. An example would be a table of sales orders, and a related table of the individual items that are part of the order. The sales order primary key would be stored in each record of the related line items that make up the order, so that you could link the order record to all the items in that order.

3. What is the name given to a table column that references the Primary Key on another table?
   Foreign key

4. What do we need in order to have a _many to many_ relationship between two tables?
   we need an intermediary table that holds foreign keys that reference the primary key on the related tables.

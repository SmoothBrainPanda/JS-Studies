CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  team_members JSONB,
  team_leader TEXT,
  hours INTEGER
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name TEXT,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  team_id INTEGER REFERENCES teams(id) ON DELETE SET NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES teams(id) ON DELETE SET NULL,
  first_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE,
  password TEXT
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name TEXT,
  details TEXT,
  duration TEXT,
  status INTEGER,
  assignee_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  team_id INTEGER REFERENCES teams(id) ON DELETE SET NULL
);

-- CREATE INDEX idx_projects_team_id ON projects(team_id);
-- CREATE INDEX idx_users_team_id ON users(team_id);
-- CREATE INDEX idx_users_email ON users(email);
-- CREATE INDEX idx_tasks_assignee_id ON tasks(assignee_id);
-- CREATE INDEX idx_tasks_team_id ON tasks(team_id);

const bcrypt = require("bcrypt");

db.createUser({
  user: "username",
  pwd: "password",
  roles: [
    {
      role: "dbOwner",
      db: "the_database",
    },
  ],
});

db.createCollection("user");

const passwordHash = await bcrypt.hash("password", 10);
db.todos.insert({ name: "User", password: passwordHash });

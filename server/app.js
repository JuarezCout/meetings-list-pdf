const express = require("express");
const cors = require("cors");

//DB
const conn = require("./db/conn");

const app = express();

app.use(cors());
app.use(express.json());

// DB connection
conn();

// Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3001, () => {
  console.log("Server online");
});

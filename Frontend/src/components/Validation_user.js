import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import Homepage from "./Homepage";

const app = express();
const port = 3200;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "healfy",
  password: "admin",
  port: 5173
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.post("/", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  console.log(email, password);
});


app.post("/signup", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  console.log(email, password);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

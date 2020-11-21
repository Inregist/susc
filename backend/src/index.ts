require("dotenv").config();
import express from "express";
import cors from "cors";
import { query } from "./database";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send(`Hello There`);
});

app.get("/clients", async (req, res) => {
  const result = await query("select * from client");
  res.send(result.rows);
});

app.post("/search", async (req, res) => {
  const { name, bank, phone } = req.body;
  console.log("search: ", { name, bank, phone });
  // const result = await query("insert into client values ($1, $2)", [name, data])
  res.send([]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

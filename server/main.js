import express from "express";
import { handleSave, handleExecute } from "./handler.js";

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:id", (req, res) => {
  res.send("id = " + req.params.id);
});

app.post("/exec", (req, res) => {
  const result = handleExecute(req.body);
  res.send(result);
});

app.post("/save", (req, res) => {
  const result = handleSave(req.body);
  res.send(result);
});

app.listen(3000);

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
  handleExecute(req.body)
    .then((data) => res.send(data))
    .catch((error) => res.status(500).send(error));
});

app.post("/save", (req, res) => {
  handleSave(req.body)
    .then((data) => res.send(data))
    .catch((error) => res.status(500).send(error));
});

app.listen(3000);

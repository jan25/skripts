import express from "express";
import { handleSave, handleExecute, handleFetch } from "./handler.js";

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:id", (req, res) => {
  res.send("id = " + req.params.id);
});

app.get("/fetch/:id", (req, res) => {
  handleFetch(req.params.id)
    .then((data) => res.send(data))
    .catch((error) => res.status(500).send(error));
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

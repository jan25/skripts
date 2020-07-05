import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { handleSave, handleExecute, handleFetch } from "./handler.js";
import { setupDataDir } from "./disk_store.js";

setupDataDir();

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
const staticFilesPath = () => {
  return path.join(__dirname + "/../frontend/dist");
};

app.use(express.static(staticFilesPath()));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.sendFile(staticFilesPath() + "/index.html");
});

app.get("/:id", (req, res) => {
  res.sendFile(staticFilesPath() + "/index.html");
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

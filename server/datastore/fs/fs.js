import fs from "fs";
import util from "util";
import { execFile } from "child_process";

// const DATA_DIR = "scripts";
const DATA_DIR = "datastore/fs/scripts";
const FILE_EXT = ".js";
const ENCODING = "utf8";

const writeToFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const fsStats = util.promisify(fs.stat);
const _execFile = util.promisify(execFile);

const fileName = (id) => {
  return `${DATA_DIR}/${id}${FILE_EXT}`;
};

const validId = (id) => {
  return id.length == 6;
};

const save = async (code, id) => {
  if (!validId(id)) {
    throw Error("Invalid Id");
  }

  const name = fileName(id);
  return await writeToFile(name, code, ENCODING)
    .then(() => true)
    .catch((err) => {
      throw err;
    });
};

const exec = async (id) => {
  if (!validId(id)) {
    throw Error("Invalid Id");
  }

  return _exec(id)
    .then((data) => {
      console.log("_exec", data);
      if (data.stderr !== undefined && data.stderr.length > 0) {
        return new Error(data.stderr);
      }

      return data.stdout;
    })
    .catch((err) => {
      throw err;
    });
};

const _exec = async (id) => {
  const name = fileName(id);

  return fsStats(name)
    .then(() => {
      return _execFile("node", [name]);
    })
    .catch((err) => {
      throw err;
    });
};

// save("let i = 3; console.log(i);", "test1")
//   .then((ok) => console.log(ok))
//   .catch((err) => console.error(err));

// exec("test1")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

export { save, exec };

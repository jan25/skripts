import fs from "fs";
import util from "util";
import { execute } from "../../executor.js";

// const DATA_DIR = "scripts";
const DATA_DIR = "datastore/fs/scripts";
const FILE_EXT = ".js";
const ENCODING = "utf8";

const writeToFile = util.promisify(fs.writeFile);

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

  return await writeToFile(fileName(id), code, ENCODING)
    .then(() => true)
    .catch((err) => {
      throw err;
    });
};

const exec = async (id) => {
  if (!validId(id)) {
    throw Error("Invalid Id");
  }

  return execute(fileName(id))
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

// save("let i = 3; console.log(i);", "test1")
//   .then((ok) => console.log(ok))
//   .catch((err) => console.error(err));

// exec("test1")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

export { save, exec };

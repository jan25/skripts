import fs from "fs";
import util from "util";
import { execFile } from "child_process";

const _fsStats = util.promisify(fs.stat);
const _execFile = util.promisify(execFile);

export const execute = (path) => {
  return _fsStats(path)
    .then(() => {
      return _execFile("node", [path]);
    })
    .catch((err) => {
      console.log("executor", err);
      throw err;
    });
};

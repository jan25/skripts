import fs from "fs";
import util from "util";
import { execFile } from "child_process";

const _fsStats = util.promisify(fs.stat);
const _execFile = util.promisify(execFile);

export const execute = async (path) => {
  try {
    const exists = await _fsStats(path);
    if (exists) {
      return _execFile("node", [path]);
    }

    throw Error("File does not exist: " + path);
  } catch (error) {
    throw error;
  }
};

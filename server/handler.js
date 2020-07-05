import { save, exec } from "./datastore/fs/fs.js";
import randomstring from "randomstring";

const successResult = (success, result, id, code) => {
  return {
    success: success,
    output: result,
    id: id,
    code: code,
  };
};

export const handleExecute = (reqBody) => {
  if (!("code" in reqBody) || !("id" in reqBody)) {
    throw new Error("Invalid request body: code or id is missing");
  }

  return _handleExecute(reqBody.code, reqBody.id);
};

const _handleExecute = async (code, id) => {
  if (id === null) {
    id = randomstring.generate(6);
  }

  try {
    const ok = await save(code, id);
    if (!ok) {
      return successResult(false, "Failed to save and run", id, code);
    }
    const output = await exec(id);
    return successResult(true, output, id, code);
  } catch (error) {
    return successResult(false, error.toString(), id, code);
  }
};

export const handleSave = (reqBody) => {
  console.log(reqBody);
  if (!("code" in reqBody) || !("id" in reqBody)) {
    throw new Error("Invalid request body: code or id is missing");
  }

  return _handleSave(reqBody.code, reqBody.id);
};

const _handleSave = async (code, id) => {
  if (id === null) {
    id = randomstring.generate(6);
  }

  try {
    const ok = await save(code, id);
    if (!ok) {
      return successResult(false, "Failed to save", id, code);
    }
    return successResult(true, "saved!", id, code);
  } catch (error) {
    return successResult(false, error.toString(), id, code);
  }
};

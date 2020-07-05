import { save, exec } from "./datastore/fs.js";

const errorResult = (message) => {
  return {
    success: false,
    message: `ERROR: ${message}`,
  };
};

const successResult = (success, result) => {
  return {
    success: success,
    output: result,
  };
};

export const handleExecute = (code, id) => {
  const ok = save(code, id);
  if (!ok) {
    return errorResult("failed to save code");
  }

  try {
    const result = exec(id);
    return successResult(true, result);
  } catch (err) {
    return successResult(false, err);
  }
};

export const handleSave = (code, id) => {
  const ok = save(code, id);
  if (!ok) {
    return errorResult("failed to save code");
  }
  return ok;
};

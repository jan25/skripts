import axios from "axios";

const TIMEOUT = 5000; // ms

export const fetch = async (id) => {
  const response = await axios.get("/fetch/" + id, { timeout: TIMEOUT });
  return response.data.code;
};

export const execute = async (code, id) => {
  console.log(code, id);
  return await axios
    .post(
      "/exec",
      {
        id: id,
        code: code,
      },
      { timeout: TIMEOUT }
    )
    .then((response) => {
      const data = response.data;
      return {
        id: data.id,
        output: data.output,
      };
    })
    .catch((error) => {
      throw error;
    });
};

export const save = async (code, id) => {
  const response = await axios
    .post(
      "/save",
      {
        id: id,
        code: code,
      },
      { timeout: TIMEOUT }
    )
    .then((response) => {
      const data = response.data;
      if (!data.success) {
        throw new Error("Failed to save", data.output);
      }
      return data.id;
    })
    .catch((error) => {
      throw error;
    });
  return response;
};

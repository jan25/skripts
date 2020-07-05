const DATA_DIR = "scripts";
const FILE_EXT = ".js";

const fileName = (id) => {
  return `${DATA_DIR}/${id}${FILE_EXT}`;
};

const save = (code, id) => {
  const name = fileName(id);
  fs.writeFileSync(name, code);
  return true;
};

const exec = (id) => {
  const name = fileName(id);
  
};

export { save, exec };

import { readdir, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  const filesFolderPath = path.resolve(__dirname, 'files')

  if (!existsSync(filesFolderPath)) {
    throw new Error("FS operation failed");
  } else {
    readdir(filesFolderPath, (_err, files)=>{
      console.log(files)
    })
  }
};

await list();
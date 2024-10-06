import { readFile, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  const readFilePath = path.resolve(__dirname, 'files', 'fileToRead.txt')

  if (!existsSync(readFilePath)) {
    throw new Error("FS operation failed");
  } else {
    readFile(readFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  }
};

await read();
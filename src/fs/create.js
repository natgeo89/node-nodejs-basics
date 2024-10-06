import { writeFile, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  const newFilePath = path.resolve(__dirname, 'files', 'fresh.txt')

  if (existsSync(newFilePath)) {
    throw new Error("FS operation failed");
  } else {
    const content = "I am fresh and young";
    writeFile(newFilePath, content, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

await create();

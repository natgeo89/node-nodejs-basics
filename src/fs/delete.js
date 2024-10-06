import { unlink, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  const fileToRemovePath = path.resolve(__dirname, 'files', 'fileToRemove.txt')

  if (!existsSync(fileToRemovePath)) {
    throw new Error("FS operation failed");
  } else {
    unlink(fileToRemovePath, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

await remove();
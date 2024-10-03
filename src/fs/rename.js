import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  const fileFolderPath = path.resolve(__dirname, "files");
  const wrongFilenamePath = path.resolve(fileFolderPath, "wrongFilename.txt");
  const properFilenamePath = path.resolve(fileFolderPath, "properFilename.md");

  if (fs.existsSync(properFilenamePath) || !fs.existsSync(wrongFilenamePath)) {
    throw new Error("FS operation failed");
  } else {
    fs.rename(wrongFilenamePath, properFilenamePath, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

await rename();

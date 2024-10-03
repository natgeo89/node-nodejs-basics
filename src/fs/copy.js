import { cp, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  const filesFolderPath = path.resolve(__dirname, "files");
  const files_copyFolderPath = path.resolve(__dirname, "files_copy");

  if (existsSync(files_copyFolderPath) || !existsSync(filesFolderPath)) {
    throw new Error("FS operation failed");
  } else {
    cp(filesFolderPath, files_copyFolderPath, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

await copy();

import { createWriteStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const writeFilePath = path.resolve(__dirname, "files", "fileToWrite.txt");

  const writeStream = createWriteStream(writeFilePath);

  process.stdin.pipe(writeStream);
};

await write();
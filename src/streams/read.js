import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const readFilePath = path.resolve(__dirname, "files", "fileToRead.txt");

  const readableStream = createReadStream(readFilePath, "utf-8");

  readableStream.on("data", (chunk) => {
    process.stdout.write(`${chunk}\n`);
  });
};

await read();

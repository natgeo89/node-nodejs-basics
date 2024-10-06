import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const cryptoSHA256 = crypto.createHash("sha256");

  const readFilePath = path.resolve(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );

  const readableStream = createReadStream(readFilePath, "utf-8");

  readableStream.on("data", (chunk) => {
    console.log(`${cryptoSHA256.update(chunk).digest("hex")}\n`);
  });
};

await calculateHash();

import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const fileToDecompressPath = path.resolve(__dirname, "files", "archive.gz");
  const decompressedFilePath = path.resolve(__dirname, "files", "decompressedFile.txt");


  const unzip = zlib.createUnzip();

  const readStream = createReadStream(fileToDecompressPath);
  const writeStream = createWriteStream(decompressedFilePath);

  readStream.pipe(unzip).pipe(writeStream);	
};

await decompress();
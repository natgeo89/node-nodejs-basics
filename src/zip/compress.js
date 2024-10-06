import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const fileToCompressPath = path.resolve(__dirname, "files", "fileToCompress.txt");
  const compressedFilePath = path.resolve(__dirname, "files", "archive.gz");
  

  const gzip = zlib.createGzip();

  const readStream = createReadStream(fileToCompressPath);
  const writeStream = createWriteStream(compressedFilePath);

  readStream.pipe(gzip).pipe(writeStream);	
};

await compress();
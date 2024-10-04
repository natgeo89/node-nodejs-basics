import { Transform } from "node:stream";

const transform = async () => {
  const reverseInput = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  });

  process.stdin.pipe(reverseInput).pipe(process.stdout);
};

await transform();

import { Worker } from "worker_threads";
import path from "node:path";
import { availableParallelism } from "node:os";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerFilePath = path.resolve(__dirname, "worker.js");

const NUM_CPU = availableParallelism();

const performCalculations = async () => {
  const arrayOfPromises = [];

  for (let i = 0; i < NUM_CPU; i++) {
    const workerPromise = new Promise((resolve) => {
      const worker = new Worker(workerFilePath, {
        workerData: { value: 10 + i },
      });

      worker.on("message", (data) => {
        resolve({ status: "resolved", data });
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });
    });

    arrayOfPromises.push(workerPromise);
  }

  const result = await Promise.all(arrayOfPromises);

  console.log(result);
};

await performCalculations();

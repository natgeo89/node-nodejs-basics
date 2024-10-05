import { fork } from "child_process";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptFilePath = path.resolve(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = fork(scriptFilePath, args);

  childProcess.on("message", (msg) => {
    console.log("Message from child", msg);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([10, "sometext"]);

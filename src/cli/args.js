const parseArgs = () => {
  const cmdLineArgs = process.argv.slice(2);
  const resultArgsArray = [];
  let tempString = '';

  for (const arg of cmdLineArgs) {
    if (arg.startsWith("--")) {
      tempString += arg.replace("--", "");
    } else {
      tempString += ` is ${arg}`;
      resultArgsArray.push(tempString);
      tempString = '';
    }
  }

  console.log(resultArgsArray.join(', '));
};

parseArgs();

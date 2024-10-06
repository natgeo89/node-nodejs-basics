const parseEnv = () => {
  const rssVariables = [];

  for (const variable in process.env) {
    if (variable.startsWith("RSS_")) {
      rssVariables.push(`${variable}=${process.env[variable]}`);
    }
  }

  console.log(rssVariables.join("; "));
};

parseEnv();

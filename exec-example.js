const { exec } = require("child_process");

exec(`curl -I www.google.com`, (error, stdout, stderr) => {
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
  // stdout is result of the command
  console.log(stdout);

  // stderr: Readable Stream that represents the child process's stderr. (no idea)
  console.log(stderr);
});
